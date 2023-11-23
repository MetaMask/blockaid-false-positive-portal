import { useSearchParams } from "react-router-dom";
import "./ReportFormPage.css";

const BLOCKAID_TICKETING_PORTAL = "https://report.blockaid.io/tx";

function ReportFormPage() {
  const [searchParams] = useSearchParams();

  const externalURL = BLOCKAID_TICKETING_PORTAL + "?" + searchParams.toString();

  return (
    <div className="confirmation-container">
      <iframe src={externalURL}>
        If this does not load, please navigate to ${externalURL}
      </iframe>
    </div>
  );
}

export default ReportFormPage;
