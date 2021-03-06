﻿using System;
using System.Data.Entity;

namespace TaskManager.DAL
{
    class TaskManagerDbContext : DbContext
    {
        public TaskManagerDbContext() : base("name=DBConnectionString")
        {
            Database.SetInitializer<TaskManagerDbContext>(new TaskInitializer());
            Database.SetInitializer<TaskManagerDbContext>(new CreateDatabaseIfNotExists<TaskManagerDbContext>());

            Database.SetInitializer<TaskManagerDbContext>(new DropCreateDatabaseIfModelChanges<TaskManagerDbContext>());
        }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<Parent> ParentTasks { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
        public class TaskInitializer : DropCreateDatabaseIfModelChanges<TaskManagerDbContext>
        {
            #region Methods

            protected override void Seed(TaskManagerDbContext context)
            {
                base.Seed(context);
            }

            #endregion
        }
    }
}
