from api import create_app

# Make it public in the local network
ip_addr = '0.0.0.0'

# Instantiate Flask application
app = create_app()

if __name__ == '__main__':
    # Switch port to 80 to deploy on cloud application with SSL Certificate
    app.run(debug=True, host=ip_addr, port=80)

    print("All done")