interface Database {
    save(data: string): void;
}

class MySQLDatabaseG implements Database {
    save(data: string): void {
        // Save data to MySQL database
    }
}

class UserServiceG {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    saveUser(user: string): void {
        this.database.save(user);
    }
}