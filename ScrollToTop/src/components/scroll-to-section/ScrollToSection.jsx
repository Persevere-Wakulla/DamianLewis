import { useRef } from "react"
import './scroll.css'


export default function ScrollToSection() {

    const ref = useRef()

    const data = [


        {
            label: "First Card",
            text: "Public Company Accounting Oversight Board Title I consists of nine sections and establishes the Public Company Accounting Oversight Board, to provide independent oversight of public accounting firms providing audit services (auditors). It also creates a small central oversight board tasked with registering auditors, defining the specific processes and procedures for compliance audits, inspecting and policing conduct and quality control, and enforcing compliance with the specific mandates of SOX.",
            style: {
                width: "100%",
                height: "600px",
                background: "red"
            }
        },
        {
            label: "Second Card",
            text: "Auditor Independence Title II consists of nine sections and establishes standards for external auditor independence, to limit conflicts of interest. It also addresses new auditor approval requirements, audit partner rotation, and auditor reporting requirements. It restricts auditing companies from providing non-audit services (e.g., consulting) for the same clients.",
            style: {
                width: "100%",
                height: "600px",
                background: "gray"
            }
        },
        {
            label: "Third Card",
            text: "Corporate Responsibility Title III consists of eight sections and mandates that senior executives take individual responsibility for the accuracy and completeness of corporate financial reports. It defines the interaction of external auditors and corporate audit committees, and specifies the responsibility of corporate officers for the accuracy and validity of corporate financial reports. It enumerates specific limits on the behaviors of corporate officers and describes specific forfeitures of benefits and civil penalties for non-compliance. For example, Section 302 requires that the company's (principal officers) (typically the chief executive officer and chief financial officer) certify and approve the integrity of their company financial reports quarterly",
            style: {
                width: "100%",
                height: "600px",
                background: "green"
            }
        },
        {
            label: "Fourth Card",
            text: "Enhanced Financial Disclosures Title IV consists of nine sections. It describes enhanced reporting requirements for financial transactions, including off-balance-sheet transactions, pro-forma figures and stock transactions of corporate officers. It requires internal controls for assuring the accuracy of financial reports and disclosures, and mandates both audits and reports on those controls. It also requires timely reporting of material changes in financial condition and specific enhanced reviews by the SEC or its agents of corporate reports.",
            style: {
                width: "100%",
                height: "600px",
                background: "yellow"
            }
        },
        {
            label: "Fifth Card",
            text: "Analyst Conflicts of Interest Title V consists of only one section, which includes measures designed to help restore investor confidence in the reporting of securities analysts. It defines the codes of conduct for securities analysts and requires disclosure of knowable conflicts of interest.",
            style: {
                width: "100%",
                height: "600px",
                background: "orange"
            }
        }
    ];

    function handleScrollToSection() {
        let position = ref.current.getBoundingClientRect().top;
        window.scrollTo({
            top: position,
            behavior: "smooth",
        });
    
    }

    return (
        <div className="center">
            <h1>Scroll To a Particular Section</h1>
            <button className="topBtn" onClick={handleScrollToSection}>Click To Scroll</button>
            {
                data.map((dataItem, index) => (

                    <div ref={index === 4 ? ref : null} style={dataItem.style}>

                        <h3>{dataItem.label}</h3>

                        <p style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 100}}>{dataItem.text}</p>

                    </div>
                ))}
            <button className="bottomBnt" onClick={handleScrollToSection}>Click To Scroll</button>
        </div>
    )
}

