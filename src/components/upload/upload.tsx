import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircleBlobElement from "../../utils/circleBlobElement";
import { importAllFilesFromFolder } from "../../utils/utils";

const UploadPage = () => {
    const listInstitutionImages: any = importAllFilesFromFolder(
        require.context("../../assets/upload/institutions/", false, /\.png$/)
    );

    return (
        <div className="mt-4 mx-auto w-75 px-5">
            <h4>
                <span
                    className="text-secondary rounded p-1"
                    style={{ backgroundColor: "rgba(214,95,48,0.2)" }}
                >
                    <FontAwesomeIcon icon={faCloudArrowUp} />
                </span>{" "}
                How to Submit Data
            </h4>
            <hr />
            <p>
                The GHGA Data Portal is currently being developed, and will allow data
                upload request over the portal in the future. Currently we are running a
                pilot project named GHGA Metadata Catalog, working with partner
                institutions to collect dataset. If you are located at a GHGA Partner
                Institute and would like to upload your metadata to GHGA Metadata
                Catalog, please the GHGA Helpdesk at <strong>dac-ghga@ghga.de</strong>.
            </p>
            <p>
                We are collecting the anonymous dataset metadata following the GHGA
                Metadata Model , and keep it interoperable with the EGA Metadata Model.{" "}
            </p>
            <CircleBlobElement colour="#404F65" diameter={125} text="Submission" borderSize={12} rotation={-35}/>
            Submission Request Evaluation Process Submission
            <p>
                As a research network, GHGA has multiple cooperations with national and
                international partners. Some of our partners:
            </p>
            <div className="d-flex justify-content-between w-100 flex-wrap">
                {listInstitutionImages.map((x: any) => (
                    <div key={x}>
                        <img src={x} alt="Institution" className="me-4 my-2" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UploadPage;
