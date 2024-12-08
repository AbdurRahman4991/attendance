$(document).ready(function() {
    // On form submit
    $("#loginForm").on("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Collect form data
        var username = $("#name").val();
        var password = $("#password").val();

        // Create the payload (data to be sent)
        var loginData = {
            username: username,
            password: password
        };

        // AJAX request
        $.ajax({
            url: "http://192.168.2.217:1001/api/auth/login", // Your API URL
            method: "POST", // Use POST method
            contentType: "application/json", // Tell the server you're sending JSON
            data: JSON.stringify(loginData), // Convert the JavaScript object to JSON
            success: function(response) {
                // Handle successful response
                console.log("Login successful", response);
                
                // You can store the JWT token in localStorage or sessionStorage
                localStorage.setItem("jwtToken", response.jwtToken);

                // Optionally, redirect the user after successful login
                window.location.href = "/dashboard"; // Modify as needed
            },
            error: function(xhr, status, error) {
                // Handle error response
                console.error("Login failed", xhr.responseText);
                alert("Invalid username or password. Please try again.");
            }
        });
    });


    // Attendance  //
   
        // On form submit
        // $("#attendanceForm").on("submit", function(event) {
        //     event.preventDefault(); // Prevent the form from submitting normally
    
        //     // Get the form values
        //     var employeeCode = $("#employeeCode").val();
        //     var year = $("#year").val();
        //     var month = $("#month").val();          
        //     // Prepare the data to be sent in the request
        //     var requestData = {
        //         EmployeeCode: employeeCode,
        //         Year: year,
        //         Month: month
        //     };
    
        //     // Get JWT token from localStorage (or wherever you stored it)
        //     var jwtToken = localStorage.getItem("jwtToken");
    
        //     // If the JWT token is not found, prompt for re-login or handle accordingly
        //     if (!jwtToken) {
        //         alert("You are not logged in. Please login first.");
        //         return;  // Stop further execution if the token is missing
        //     }
    
        //     // Send AJAX request to fetch attendance data
        //     $.ajax({
        //         //url: "http://apps.amangroupbd.com:1001/api/DailyAttendance/searchAttendances", // Your API URL
        //         //url: "http://apps.amangroupbd.com:1001/api/DailyAttendance/searchAttendances?EmployeeCode=901278&Year=2024&Month=december",
        //         url = `http://apps.amangroupbd.com:1001/api/DailyAttendance/searchAttendances?EmployeeCode=${employeeCode}&Year=${year}&Month=${month}`;

        //         method: "GET", // Assuming GET method for fetching data
        //         data: requestData, // Send the parameters in the URL
        //         headers: {
        //             "Authorization": "Bearer " + jwtToken // Add Authorization header
        //         },
        //         success: function(response) {
        //             console.log('Data'+ response);
        //             // Clear the table body before adding new data
        //             $("#attendanceTable tbody").empty();
    
        //             // Check if response has data
        //             if (response && response.length > 0) {
        //                 // Iterate through the response and append rows to the table
        //                 $.each(response, function(index, item) {
        //                     var row = `<tr>
        //                         <td>${item.employee_Code}</td>
        //                         <td>${item.employee_Name}</td>
        //                         <td>${item.department}</td>
        //                         <td>${item.desingnation || item.designation}</td>
        //                         <td>${item.inTime ? item.inTime.split('T')[1] : 'N/A'}</td>
        //                         <td>${item.outTime ? item.outTime.split('T')[1] : 'N/A'}</td>
        //                     </tr>`;
        //                     $("#attendanceTable tbody").append(row);
        //                 });
        //             } else {
        //                 // If no data is found
        //                 $("#attendanceTable tbody").append("<tr><td colspan='6'>No data found</td></tr>");
        //             }
        //         },
        //         error: function(xhr, status, error) {
        //             // Handle error
        //             console.error("Error fetching attendance data:", error);
        //             if (xhr.status === 401) {
        //                 alert("Unauthorized access. Please log in again.");
        //                 // Optionally redirect to login page
        //                 window.location.href = "/";  // Adjust the path as needed
        //             } else {
        //                 alert("An error occurred while fetching the data.");
        //             }
        //         }
        //     });
        // });

        
      
            // $("#attendanceForm").on("submit", function(event) {
            //     event.preventDefault(); // Prevent the form from submitting normally
        
            //     // Get the form values
            //     var employeeCode = $("#employeeCode").val();
            //     var year = $("#year").val();
            //     var month = $("#month").val();
        
            //     // Prepare the dynamic URL with query parameters
            //     var apiUrl = `http://apps.amangroupbd.com:1001/api/DailyAttendance/searchAttendances?EmployeeCode=${employeeCode}&Year=${year}&Month=${month}`;
        
            //     // Get JWT token from localStorage (or wherever you stored it)
            //     var jwtToken = localStorage.getItem("jwtToken");
        
            //     // If the JWT token is not found, prompt for re-login or handle accordingly
            //     if (!jwtToken) {
            //         alert("You are not logged in. Please login first.");
            //         return;  // Stop further execution if the token is missing
            //     }
        
            //     // Send AJAX request to fetch attendance data
            //     $.ajax({
            //         url: apiUrl, // Dynamic URL with query parameters
            //         method: "GET", // Assuming GET method for fetching data
            //         headers: {
            //             "Authorization": "Bearer " + jwtToken // Add Authorization header
            //         },
            //         success: function(response) {
            //             console.log("API Response:", response);  // Log the response to the console for debugging
        
            //             // Clear the table body before adding new data
            //             $("#attendanceTable tbody").empty();
        
            //             // Check if response has data
            //             if (response && response.length > 0) {
            //                 var userProfilTable = `
            //                   <table class="table">
            //                     <thead>
            //                             <tr>
            //                                 <th>#</th>
            //                                 <th>Employee Code</th>
            //                                 <th>Name</th>
            //                                 <th>Unit</th>
            //                                 <th>Department</th>            
            //                                 <th>Designation</th>
            //                                 <th>Joining Date</th>
            //                                 <th>Shift Name</th>
            //                                 <th>Late Margin (Min/Hr)</th>                                
            //                             </tr>
            //                         </thead>
            //                         <tbody>
            //                             <tr>
            //                                 <td>${response.employee_Code}</td>
            //                                 <td>${response.employee_Name}</td>
            //                                 <td>${response.unit}</td>
            //                                 <td>${response.department}</td>
            //                                 <td>${response.desingnation}</td>
            //                                 <td>${response.doj}</td>
            //                                 <td>${response.shiftName}</td>
            //                                 <td>${response.lateMargin}</td>

            //                             </tr>
            //                         </tbody>
            //                     </table>
            //                 `;
            //                 var id = 1;
            //                 // Iterate through the response and append rows to the table
            //                 $.each(response, function(index, item) {
            //                     var lateClass = item.late ? 'text-danger' : ''; 
            //                     var wekend =  item.day_Status === 'W' ? 'bg-secondary' : '';
            //                     var row = `<tr class="${lateClass} ${wekend}">
            //                         <td>${id++}</td>
            //                         <td>${item.workingDate ? item.workingDate  : 'N/A'}</td>
            //                         <td>${item.day_Status ? item.day_Status : 'N/A'}</td>
            //                         <td>${item.shiftInTime ? item.shiftInTime.split('T')[1] : 'N/A'}</td>
            //                         <td>${item.shiftInTime ? item.shiftOutTime.split('T')[1] : 'N/A'}</td>
            //                         <td>${item.inTime ? (isValidDate(item.inTime) ? formatTime(item.inTime) : 'Invalid Time') : 'N/A'}</td> <!-- Show only time -->
            //                         <td>${item.outTime ? (isValidDate(item.outTime) ? formatTime(item.outTime) : 'Invalid Time') : 'N/A'}</td> <!-- Show only time -->
            //                         <td>${item.working_Hours ? item.working_Hours : 'N/A'}</td>                                    
            //                         <td >${item.late ? item.late : 'N/A'}</td> <!-- Conditional class here -->
            //                         <td> ${item.inTimeRequest ? item.inTimeRequest : 'N/A'}</td>
            //                         <td> ${item.outTimeRequest ? item.outTimeRequest : 'N/A'}</td>
            //                         <td> ${item.remarks ? item.remarks : 'N/A'}</td>                                    
            //                         <td>${item.doc_Status ? item.doc_Status : 'N/A'}</td>
            //                         <td> <i class="fa-solid fa-fingerprint"></i></td>
            //                         <td> <i class="fa-solid fa-arrow-right"></i></td>                                                                          
            //                     </tr>`;
            //                     $("#attendanceTable tbody").append(row);
            //                 });
            //             } else {
            //                 // If no data is found
            //                 $("#attendanceTable tbody").append("<tr><td colspan='6'>No data found</td></tr>");
            //             }
                        
            //             // Helper function to check if a value is a valid date
            //             function isValidDate(date) {
            //                 return !isNaN(new Date(date).getTime());
            //             }

            //             // Helper function to extract and format time (HH:mm)
            //             function formatTime(date) {
            //                 var time = new Date(date);
            //                 return time.getHours().toString().padStart(2, '0') + ':' + time.getMinutes().toString().padStart(2, '0');
            //             }
            //         },
            //         error: function(xhr, status, error) {
            //             // Handle error
            //             console.error("Error fetching attendance data:", error);
            //             if (xhr.status === 401) {
            //                 alert("Unauthorized access. Please log in again.");
            //                 // Optionally redirect to login page
            //                 window.location.href = "/";  // Adjust the path as needed
            //             } else {
            //                 alert("An error occurred while fetching the data.");
            //             }
            //         }
            //     });
            // });

            $("#attendanceForm").on("submit", function(event) {
                event.preventDefault(); // Prevent the form from submitting normally
            
                // Get the form values
                var employeeCode = $("#employeeCode").val();
                var year = $("#year").val();
                var month = $("#month").val();
            
                // Prepare the dynamic URL with query parameters
                var apiUrl = `http://apps.amangroupbd.com:1001/api/DailyAttendance/searchAttendances?EmployeeCode=${employeeCode}&Year=${year}&Month=${month}`;
            
                // Get JWT token from localStorage (or wherever you stored it)
                var jwtToken = localStorage.getItem("jwtToken");
            
                // If the JWT token is not found, prompt for re-login or handle accordingly
                if (!jwtToken) {
                    alert("You are not logged in. Please login first.");
                    return;  // Stop further execution if the token is missing
                }
            
                // Send AJAX request to fetch attendance data
                $.ajax({
                    url: apiUrl, // Dynamic URL with query parameters
                    method: "GET", // Assuming GET method for fetching data
                    headers: {
                        "Authorization": "Bearer " + jwtToken // Add Authorization header
                    },
                    success: function(response) {
                        console.log("API Response:", response);  // Log the response to the console for debugging
            
                        // Render the user profile table
                        if (response && response.length > 0) {
                            var userProfileTable = `
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Employee Code</th>
                                            <th>Name</th>
                                            <th>Unit</th>
                                            <th>Department</th>
                                            <th>Designation</th>            
                                            <th>Joining Date</th>
                                            <th>Shift Name</th>
                                            <th>Late Margin (Min/Hr)</th>                                  
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>${response[0].employee_Code}</td>
                                            <td>${response[0].employee_Name}</td>
                                            <td>${response[0].unit}</td>
                                            <td>${response[0].department}</td>
                                            <td>${response[0].designation}</td>
                                            <td>${response[0].doj}</td>
                                            <td>${response[0].shiftName}</td>
                                            <td>${response[0].lateMargin}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            `;
                            // Insert the user profile table
                            $("#user-profile").html(userProfileTable);
                        }
            
                        // Clear the table body before adding new data
                        $("#attendanceTable tbody").empty();
            
                        // Check if response has attendance data
                        if (response && response.length > 0) {
                            var id = 1;
                            // Iterate through the response and append rows to the table
                            $.each(response, function(index, item) {
                                var lateClass = item.late ? 'text-danger' : ''; 
                                var weekend = item.day_Status === 'W' ? 'bg-secondary' : '';
                                var row = `<tr class="${lateClass} ${weekend}">
                                    <td>${id++}</td>
                                    <td>${item.workingDate ? item.workingDate : 'N/A'}</td>
                                    <td>${item.day_Status ? item.day_Status : 'N/A'}</td>
                                    <td>${item.shiftInTime ? item.shiftInTime.split('T')[1] : 'N/A'}</td>
                                    <td>${item.shiftInTime ? item.shiftOutTime.split('T')[1] : 'N/A'}</td>
                                    <td>${item.inTime ? (isValidDate(item.inTime) ? formatTime(item.inTime) : 'Invalid Time') : 'N/A'}</td> 
                                    <td>${item.outTime ? (isValidDate(item.outTime) ? formatTime(item.outTime) : 'Invalid Time') : 'N/A'}</td> 
                                    <td>${item.working_Hours ? item.working_Hours : 'N/A'}</td>                                    
                                    <td>${item.late ? item.late : 'N/A'}</td>
                                    <td>${item.inTimeRequest ? item.inTimeRequest : 'N/A'}</td>
                                    <td>${item.outTimeRequest ? item.outTimeRequest : 'N/A'}</td>
                                    <td>${item.remarks ? item.remarks : 'N/A'}</td>
                                    <td>${item.doc_Status ? item.doc_Status : 'N/A'}</td>
                                    <td><i class="fa-solid fa-fingerprint"></i></td>
                                    <td><i class="fa-solid fa-arrow-right"></i></td> 
                                </tr>`;
                                $("#attendanceTable tbody").append(row);
                            });
                        } else {
                            // If no data is found
                            $("#attendanceTable tbody").append("<tr><td colspan='6'>No data found</td></tr>");
                        }
            
                        // Helper function to check if a value is a valid date
                        function isValidDate(date) {
                            return !isNaN(new Date(date).getTime());
                        }
            
                        // Helper function to extract and format time (HH:mm)
                        function formatTime(date) {
                            var time = new Date(date);
                            return time.getHours().toString().padStart(2, '0') + ':' + time.getMinutes().toString().padStart(2, '0');
                        }
                    },
                    error: function(xhr, status, error) {
                        // Handle error
                        console.error("Error fetching attendance data:", error);
                        if (xhr.status === 401) {
                            alert("Unauthorized access. Please log in again.");
                            // Optionally redirect to login page
                            window.location.href = "/";  // Adjust the path as needed
                        } else {
                            alert("An error occurred while fetching the data.");
                        }
                    }
                });
            });
            
        
        
        
        
    
    

});
