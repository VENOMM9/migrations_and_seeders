## migrations_and_seeders
# sql (Sequelize) Branch - Migrations and Seeders
Project: SQL (Sequelize) Branch

This branch of the project deals with data storage in a relational database using Sequelize, a Node.js Object-Relational Mapping (ORM) library.

# Migrations
- The SQL branch uses migrations to manage changes to the database schema. Migrations help you version-control your database and apply changes incrementally.
- Use Sequelize CLI to create and run migrations.
- Follow these steps to create and run migrations:

1. Install Sequelize CLI if not already installed:
npm install -g sequelize-cli
2 .Create a new migration for the user model:
sequelize migration:create --name create-users
3. Modify the created migration file in the migrations directory to define the user model schema changes (e.g., adding or modifying columns).
4. Apply the migration to the database:
sequelize db:migrate
# Seeders
- Seeders are used to populate the database with initial or test data.
- Follow these steps to create and run seeders:
1. Create a new seeder for the product model:


2. sequelize seed:generate --name demo-product
Modify the generated seeder file in the `seeders` directory to define sample data for the `product` model.
3. Run the seeder to populate the database:

sequelize db:seed:all

# nosql (MongoDB) Branch - Seeders
Project: NoSQL (MongoDB) Branch

This branch of the project deals with data storage in a NoSQL MongoDB database.

# Seeders
-In the NoSQL branch, seeders are used to populate the MongoDB database with initial or test data.
-Follow these steps to create and run seeders:
1.Create a new seeder file for the product model, e.g., productSeeder.js.
2.Define sample data for the product model within the seeder file.
3.Use a MongoDB database library (e.g., Mongoose) to connect to the MongoDB database and insert the sample data into the product collection.
4.Run the seeder script:
node productSeeder.js
Please make sure you are working on the correct branch and database type (SQL or NoSQL) when dealing with migrations and seeders.
