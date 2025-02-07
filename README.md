<h1>Contact Page with Message Storage</h1>
  
  <p>This project implements a contact page where users can fill in their contact information and send messages. Once the user submits the form, the message is stored in a Microsoft SQL Server (MSSQL) database. An admin interface is also provided to review and manage incoming messages.</p>

  <h2>Features</h2>
  <ul>
    <li><strong>Contact Form</strong>: Users can enter their name, email, and message, and submit it through the form.</li>
    <li><strong>Database Storage</strong>: All submitted messages are saved in an MSSQL database for further review.</li>
    <li><strong>Admin Dashboard</strong>: Admins can log in to a dedicated dashboard to view all incoming messages, review the details, and manage them.</li>
    <li><strong>Responsive Design</strong>: The contact form and admin interface are fully responsive for a seamless experience on all devices.</li>
  </ul>

  <h2>Tech Stack</h2>
  <ul>
    <li><strong>Frontend</strong>: React, Tailwind CSS</li>
    <li><strong>Backend</strong>: ASP.Net Core</li>
    <li><strong>Database</strong>: Microsoft SQL Server (MSSQL)</li>
    <li><strong>Authentication (Optional)</strong>: Admin login system to restrict access to the message review page</li>
  </ul>

  <h2>Setup Instructions</h2>
  <ol>
    <li>Clone this repository to your local machine.</li>
    <li>Install the required dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Configure your MSSQL database connection in the backend settings.</li>
    <li>Start the server:
      <pre><code>npm start</code></pre>
    </li>
    <li>Access the contact page on the frontend and the message management interface on the admin side.</li>
  </ol>

  <h2>Future Enhancements</h2>
  <ul>
    <li>Implement email notifications when a new message is received.</li>
    <li>Add a validation system for the message form to ensure proper data submission.</li>
    <li>Enhance the admin interface with filtering and searching capabilities for messages.</li>
  </ul>
