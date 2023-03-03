import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { importAllFilesFromFolder } from "../../utils/utils";
import uploadImg from "../../assets/upload/upload.png"

const Upload = () => {
    const listInstitutionImages: any = importAllFilesFromFolder(
        require.context("../../assets/upload/institutions/", false, /\.png$/)
    );

    return (
        <div className="mx-auto px-5 my-5">
            <h5 className="d-flex align-items-center text-secondary fw-bold">
                <FontAwesomeIcon
                    icon={faCloudArrowUp}
                    pull="left"
                    style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: "rgba(214,95,48,0.2)",
                        padding: "8px",
                    }}
                    className="me-3 fs-4 rounded"
                />
                How to Submit Data
            </h5>
            <hr className="border-secondary mb-4" />
            <p>
                The GHGA Data Portal is currently being developed, and will allow data
                upload request over the portal in the future. Currently we are running a
                pilot project named GHGA Metadata Catalog, working with partner
                institutions to collect dataset. If you are located at a GHGA Partner
                Institute and would like to upload your metadata to GHGA Metadata
                Catalog, please contact the GHGA Helpdesk at <strong>ghga-office[at]dkfz-heidelberg[dot]de</strong>.
            </p>
            <p>
                We are collecting the anonymous dataset metadata following the GHGA
                Metadata Model, and keep it interoperable with the EGA Metadata Model.{" "}
            </p>
            <div className="text-center">
                <img src={uploadImg} alt="upload" className="mb-5" width="80%" />
            </div>
            <p className="mb-4">
                As a research network, GHGA has multiple cooperations with national and
                international partners. Some of our partners:
            </p>
            <div className="d-flex justify-content-center align-items-center w-100 flex-wrap mb-5">
                {listInstitutionImages.map((x: any) => (
                    <div key={x} className="text-center" style={{minWidth: "20rem"}}>
                        <img src={x} alt="Institution" className="me-4 my-2" style={{maxHeight: "10rem"}}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Upload;
