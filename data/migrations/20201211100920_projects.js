exports.up = function (knex) {
    return knex.schema
        .createTable("projects", (tbl) => {
            tbl.increments().unique()
            tbl.string("name", 200).notNullable();
            tbl.string("description", 125);
            tbl.boolean("completed").defaultTo(false).notNullable();

        })
        .createTable("resources", (tbl) => {
            tbl.increments().unique();
            tbl.string("name", 128).unique().notNullable();
            tbl.string("description", 300);
        })
        .createTable("tasks", (tbl) => {
            tbl.increments().unique();
            tbl.string("description", 350).notNullable();
            tbl.string("notes", 120);
            tbl.boolean("completed").defaultTo(false).notNullable();
            tbl
                .integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            tbl
                .integer("resource_id")
                .unsigned()
                .references("id")
                .inTable("resources")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        })










};

exports.down = function (knex) {
    return knex.schema
        // .dropTableIfExists('project_tasks')
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("projects");
};
