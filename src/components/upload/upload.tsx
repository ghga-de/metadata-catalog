import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { importAllFilesFromFolder } from "../../utils/utils";
import { Buffer } from "buffer";

const UploadPage = () => {
    const listInstitutionImages: any = importAllFilesFromFolder(
        require.context("../../assets/upload/institutions/", false, /\.png$/)
    );
    const svgBlobCode: string =
        '<svg width="171" height="160" viewBox="0 0 171 160" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M128.552 0.685689C119.147 0.826371 110.065 4.109 102.765 10.0062C95.4646 15.9034 90.3705 24.0729 88.3006 33.2022C88.288 33.357 88.2729 33.5429 88.2603 33.6978C87.402 38.1174 84.835 42.024 81.1111 44.5777C77.3873 47.1315 72.8039 48.1284 68.3465 47.3541C64.8652 46.7265 61.3308 46.4386 57.7938 46.4946C46.5025 46.421 35.4494 49.7067 26.053 55.9299C16.6566 62.1531 9.34552 71.0299 5.05806 81.4212C0.770592 91.8125 -0.297675 103.244 1.99036 114.249C4.27839 125.254 9.81833 135.33 17.8992 143.185C25.9801 151.039 36.2333 156.313 47.343 158.33C58.4526 160.347 69.9119 159.015 80.2502 154.505C90.5885 149.995 99.3341 142.513 105.365 133.018C111.395 123.524 114.436 112.45 114.096 101.219C114.05 96.7167 115.78 92.3778 118.916 89.1348C122.051 85.8918 126.341 84.0035 130.863 83.876L131.361 83.9166C142.291 83.3616 152.562 78.5583 159.963 70.5406C167.363 62.5229 171.302 51.9316 170.932 41.0465C170.562 30.1614 165.912 19.8526 157.983 12.3389C150.054 4.82523 139.48 0.707335 128.537 0.871542L128.552 0.685689Z" fill="#4D85DA"/></svg>';
    const svgBlobEncoded: string = Buffer.from(svgBlobCode).toString("base64");
    const svgCircleCode: string =
        '<svg width="205" height="200" viewBox="0 0 205 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M204.414 107.927C202.841 127.548 195.337 146.25 182.852 161.667C170.366 177.083 153.461 188.52 134.273 194.533C115.086 200.545 94.4797 200.861 75.0612 195.441C55.6427 190.022 38.2847 179.11 25.1835 164.086C12.0823 149.062 3.82661 130.602 1.46087 111.041C-0.904866 91.4801 2.72571 71.6971 11.8932 54.1951C21.0608 36.6932 35.3533 22.2588 52.9625 12.7182C70.5717 3.17761 90.7062 -1.04042 110.819 0.597765L102.764 99.4924L204.414 107.927Z" fill="#4D85DA"/></svg>'
    const svgCircleEncoded: string = Buffer.from(svgBlobCode).toString("base64");
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
