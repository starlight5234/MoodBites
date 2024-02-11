import os, glob, sys, shutil
import pandas as pd
from sqlalchemy import create_engine, Table, MetaData, Column, String, Float, Integer, Boolean

# Define a function to extract the last part after "," from the address
def extract_location(address):
    if pd.isnull(address):
        return 'Bangalore'
    else:
        parts = address.split(',')
        return parts[-1].strip()

''' Step 1: Check if the input folder exists '''
input_folder = "input/"
if not os.path.exists(input_folder):
    print("Input folder does not exist. Exiting script.")
    sys.exit()

''' Step 2: Check if the input folder is empty '''
excel_files = glob.glob(os.path.join(input_folder, "*.xlsx"))
if not excel_files:
    print("Input folder is empty. Exiting script.")
    sys.exit()

''' Step 3: Make a working copy where we fill in data '''
# Path to the source database file (current directory)
source_db = 'db.sqlite3'

# Path to the destination database file (the copy)
output_db = f'output_{source_db}'

# Copy the database file
if os.path.exists(output_db):
    # Remove the existing destination database file
    os.remove(output_db)

shutil.copyfile(source_db, output_db)

''' Step 4: Setup database conncetion '''
#  Select the columns you want to add to the database table
selected_columns = ["url", "name", "online_order", "book_table", "rate", "votes", "location", "rest_type", "dish_liked", "cuisines", "cost", "type", "city"]

#  Connect to your database using SQLAlchemy
db_engine = create_engine(f'sqlite:///{output_db}')  # SQLite connection string

# Define metadata and table structure
metadata = MetaData()
mbAPI_restaurant = Table(
    'mbAPI_restaurant',
    metadata,
    Column('index', Integer, primary_key=True),
    Column('url', String),
    Column('name', String),
    Column('online_order', Boolean),
    Column('book_table', Boolean), 
    Column('rate', Float),
    Column('votes', Integer),
    Column('location', String),
    Column('rest_type', String),
    Column('dish_liked', String),
    Column('cuisines', String),
    Column('cost', Integer, default=0),
    Column('type', String),
    Column('city', String)
)
metadata.create_all(db_engine)

''' Step 5: Loop through each Excel file, extract data, and insert into the database table '''

# Initialize a variable to keep track of the maximum index value encountered
max_index = 1

for file_name in excel_files:
    excel_data = pd.read_excel(file_name)
    
    # Convert boolean columns to strings
    excel_data['online_order'] = excel_data['online_order'].astype(str)
    excel_data['book_table'] = excel_data['book_table'].astype(str)

    # Replace null values in 'cost' column with -1
    excel_data['cost'].fillna(-1, inplace=True)
    
    # Replace null values in 'location' column with extracted location from 'address' column
    excel_data['location'] = excel_data.apply(lambda row: extract_location(row['address']) if pd.isnull(row['location']) else row['location'], axis=1)

    # Assign unique index values to the DataFrame
    excel_data['index'] = range(max_index, max_index + len(excel_data))

    # Increment max_index by len(excel_data) to ensure unique index values for each iteration
    max_index += len(excel_data)

    selected_data = excel_data[selected_columns]
    selected_data.to_sql('mbAPI_restaurant', con=db_engine, if_exists='append', index=True)

print("Database Loaded sucessfully!!")
