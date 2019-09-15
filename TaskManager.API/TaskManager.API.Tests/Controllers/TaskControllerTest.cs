using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.API.Controllers;
using TaskManager.Model;

namespace TaskManager.API.Tests
{
    [TestFixture]
    public class TaskControllerTest
    {
        [Test]
        public void GetTaskDetails()
        {
            // Arrange
            TaskModel record = new TaskModel()
            {
                Task = "Current Task",
                ParentTask = "Parent Task",
                Priority = 2,
                Status = "Completed",
                StartDate = DateTime.Now,
                EndDate = DateTime.Now
            };
            // First insert the record
            TaskController controller = new TaskController();
            controller.Post(record);

            // Act
            List<TaskModel> result = controller.GetTaskDetails();

            // Assert
            Assert.IsNotNull(result);
            Assert.GreaterOrEqual(result.Count(), 1);
        }

        [Test]
        public void Post()
        {
            // Arrange
            TaskModel record = new TaskModel()
            { Task ="Current Task",
              ParentTask ="Parent Task",
              Priority= 2,
              Status ="Completed",
              StartDate =DateTime.Now,
              EndDate =DateTime.Now
            };
            TaskController controller = new TaskController();

            // Act
            var result = controller.Post(record);

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(true, result);
        }

        [Test]
        public void Put()
        {
            // Arrange
            TaskController controller = new TaskController();
            int taskID = 0;
            List<TaskModel> result = controller.GetTaskDetails();
            taskID = result.ElementAt(0).TaskId;
            TaskModel record = new TaskModel()
            {
                TaskId = taskID,
                Task = "Current Task",
                ParentTask = "Parent Task",
                Priority = 2,
                Status = "Completed",
                StartDate = DateTime.Now,
                EndDate = DateTime.Now
            };
            

            // Act
            var success = controller.Put(record);

            // Assert
            Assert.IsNotNull(success);
            Assert.AreEqual(true, success);
        }

        [Test]
        public void Delete()
        {
            // Arrange
            TaskModel record = new TaskModel()
            {
                Task = "Current Task",
                ParentTask = "Parent Task",
                Priority = 2,
                Status = "Completed",
                StartDate = DateTime.Now,
                EndDate = DateTime.Now
            };
            // First insert the record
            TaskController controller = new TaskController();
            controller.Post(record);

            int taskID = 0;
            List<TaskModel> getResult = controller.GetTaskDetails();
            taskID = getResult.ElementAt(0).TaskId;

            // Act
            var success = controller.Delete(taskID);

            // Assert
            Assert.IsNotNull(success);
            Assert.AreEqual(true, success);
        }
    }
}
