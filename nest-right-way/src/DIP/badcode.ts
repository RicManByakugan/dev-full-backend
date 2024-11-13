class MySQLDatabase {
    save(data: string): void {
        // Save data to MySQL database
    }
}

class UserService {
    private database: MySQLDatabase;

    constructor(database: MySQLDatabase) {
        this.database = database;
    }

    saveUser(user: string): void {
        this.database.save(user);
    }
}