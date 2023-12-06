import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";

if (!process.env.DATABASE_URL) {
    console.log("🔴 no database URL");
}

const client = postgres(process.env.DATABASE_URL!, { max: 1 });
export const db = drizzle(client, { schema });

// Migrate the database
(async () => {
    try {
        console.log("🟠 Migrating client");
        await migrate(db, { migrationsFolder: "migrations" });
        console.log("🟢 Successfully Migrated");
    } catch (error) {
        console.log("🔴 Error Migrating client", error);
    }
})();
