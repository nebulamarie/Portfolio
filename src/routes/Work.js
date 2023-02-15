import { Link } from "react-router-dom";
export default function Work() {
    return (
      <div className="Work">
        <h2>Work Experience</h2>
        <body>
          <p><b>Consulting</b>
            <ul>
            <li>Business Management Consultant at RJ Consulting Math</li>
            <li>Analysis to study industry, competitive landscape and company positioning</li>
            <li>Identify targets, product lines, service offerings to compliment current business</li>
            <li>Development of new sales strategy, budget creation and financial forecast</li>
            <li> Negotiate contracts and rates for competitive vendor pricing</li>
            <li>Evaluate and implement best practices for HR management</li>
            <li> Create benchmarks for all company departments and metrics management</li>
            </ul>
          </p>
          <p><b>Vendor Management</b>
            <ul>
            <li>Vendor Relations Manager at Legacy Group Enterprises</li>
            <li>Spearheaded leadership and vision for newly created Vendor Relations Department</li>
            <li>Created processes and SOP's for managing nationwide third party vendors</li>
            <li>Built the vendor recruitment process, in alignment to the company's initiatives and SLA</li>
            <li>Acted as point of vendor escalation for internal stakeholders, mended relationships, evaluated vendors
to ensure alignment with company objectives</li>
            <li>Oversaw a team of internal two Vendor Relations Specialists and three BPO team members in management
and compliance of over 500 vendors</li>
            </ul>
            <ul>
            <li>Preferred Vendor Supervisor at True Source</li>
            <li>Responsible for performance of 130+ third party vendors across different trades to execute
over 200 daily on demand service calls. Drove vendor performance to align with company
initiatives and direction</li>
            <li>Continually monitored vendor KPI's, identified issues, analyzed data, identified root
causes,coordinated immediate solutions, and developed strategic preventative measures</li>
            <li>Served as Point of Escalation to vendors delivering problem resolution. Liaised between Sales,
Accounting and Service Departments to voice vendor concerns</li>
            <li> Actively introduced and engaged in process improvement initiatives, contributed to the
vendor scorecard process, executed vendor performance improvement plans and provided
final grade</li>
            <li>Used reporting tools to monitor workflow, load balance, forecast staffing needs to drive team
performance and department production goals</li>
            <li>Trained, developed and supervised team members. Conducted staff reviews, ensured team
adhered to company policy</li>
            <li>Reviewed resumes, selected candidates and conducted interviews for potential new hires</li>
            </ul>
          </p>
          <p><b>Account Management</b>
          <ul>
            <li>Business Management Consultant at RJ Consulting Math</li>
            <li>Analysis to study industry, competitive landscape and company positioning</li>
            <li>Identify targets, product lines, service offerings to compliment current business</li>
            <li>Development of new sales strategy, budget creation and financial forecast</li>
            <li> Negotiate contracts and rates for competitive vendor pricing</li>
            <li>Evaluate and implement best practices for HR management</li>
            <li> Create benchmarks for all company departments and metrics management</li>
          </ul>
          </p>

      <footer className='Contactfooter'>
        <p><Link to={'/home'}>Home</Link></p>
      </footer>
        </body>
      </div>
    );
  }

