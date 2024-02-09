import os
import pandas as pd
import sqlite3

# Function to read Excel file and insert data into SQLite database
def excel_to_sqlite(excel_file, sqlite_db):
    # Extract table name from the file name (excluding extension)
    table_name = os.path.splitext(os.path.basename(excel_file))[0]

    # Read Excel file into a DataFrame
    df = pd.read_excel(excel_file)

    # Create SQLite connection
    conn = sqlite3.connect(sqlite_db)

    # Create a table in the SQLite database
    df.to_sql(table_name, conn, index=False, if_exists='replace')

    # Commit changes and close the connection
    conn.commit()
    conn.close()

# Specify the folder where Excel files are located
input_folder = './input'

# Check if the input folder exists
if not os.path.exists(input_folder):
    print(f"Error: The folder '{input_folder}' does not exist.")
    exit()

# Specify SQLite database
sqlite_db = 'db.sqlite3'

# Get a list of all files in the input folder
excel_files = [os.path.join(input_folder, file) for file in os.listdir(input_folder) if file.endswith('.xlsx')]

# Check if there are any Excel files in the folder
if not excel_files:
    print(f"Error: No Excel files (.xlsx) found in the folder '{input_folder}'.")
    exit()

# Iterate through Excel files and populate SQLite database with separate tables
for excel_file in excel_files:
    excel_to_sqlite(excel_file, sqlite_db)
