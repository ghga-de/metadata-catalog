import { faCircle, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faChartColumn,
  faDna,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { getMetadataSummary } from "../../../api/browse";
import { metadataSummaryModel } from "../../../models/dataset";
import { getItemsForSummary } from "../../../utils/utils";
import HomeMidSectionBadge from "./homeMidSectionBadge";

const HomeMidSection = () => {
  const [summary, setSummary] = React.useState<metadataSummaryModel | null>(
    null
  );

  React.useEffect(() => {
    const getData = () => {
      getMetadataSummary(setSummary);
    };
    getData();
  }, []);

  const badgeLightClasses: String = "border-muted";
  const badgeDarkClasses: String = "border-white bg-primary text-white";

  const BadgeTitleGen = (
    icon: IconDefinition,
    titleString: any,
    titleClasses: string
  ) => {
    return (
      <>
        <Row
          style={{ fontSize: "36px" }}
          className={"p-0 col-auto mb-2 " + titleClasses}
        >
          <span className="fa-layers fa-fw fa-lg">
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={icon} transform="shrink-8" />
          </span>
        </Row>
        <Row className="w-bold fs-5 ps-0">
          <span className={"text-center " + titleClasses}>{titleString}</span>
        </Row>
      </>
    );
  };

  let Badges: {
    badgeTitle: any;
    badgeBody: any;
    bodyRowClasses: string;
    bodyColClasses: string;
    badgeClasses: String;
  }[] = [];

  if (summary !== null) {
    Badges.push({
      badgeTitle: (
        <Row className="w-bold fs-5 ps-0">
          <span className="text-center">Total Datasets:</span>
        </Row>
      ),
      badgeBody: (
        <NavLink
          to="/browse"
          style={{
            borderRadius: "50%",
            width: "9rem",
            height: "9rem",
            background: "linear-gradient(#e84614 5%, #CFE7CD 70%)",
          }}
          className="mx-auto d-block text-decoration-none"
        >
          <div
            style={{
              borderRadius: "50%",
              width: "7rem",
              height: "7rem",
              top: "1rem",
              left: "1rem",
              position: "relative",
            }}
            className="bg-white d-flex align-items-center"
          >
            <span className="w-100 text-center fs-1">
              {summary?.dataset_summary.count}
            </span>
          </div>
        </NavLink>
      ),
      bodyRowClasses: "mt-4 pt-3 fs-7 align-items-center",
      bodyColClasses: "text-center",
      badgeClasses: badgeDarkClasses,
    });

    Badges.push({
      badgeTitle: BadgeTitleGen(
        faDna,
        "Platforms: " +
          Object.keys(
            summary.protocol_summary.stats.protocol
          ).length.toString(),
        "text-secondary"
      ),
      badgeBody: getItemsForSummary(
        summary.protocol_summary.stats.protocol
      ).map((x) => (
        <Row key={x} className="text-capitalize ms-0 ps-0 mb-2">
          <Col className="ms-0 ps-0">{x.split(": ")[0]}:</Col>
          <Col className="col-auto text-end fw-bold">{x.split(": ")[1]}</Col>
        </Row>
      )),
      bodyRowClasses: "pt-3 fs-7",
      bodyColClasses: "",
      badgeClasses: badgeLightClasses,
    });

    Badges.push({
      badgeTitle: BadgeTitleGen(
        faUser,
        "Individuals: " + summary.individual_summary.count.toString(),
        ""
      ),
      badgeBody: (
        <>
          <Row className="pt-4 mt-3">
            <Col className="text-center">
              Female:&nbsp;
              <strong>{summary.individual_summary.stats.sex["female"]}</strong>
            </Col>
            <Col className="text-center">
              Male:&nbsp;
              <strong>{summary.individual_summary.stats.sex["male"]}</strong>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              Unknown:&nbsp;
              <strong>
                {summary.individual_summary.stats.sex["unknown"]
                  ? summary.individual_summary.stats.sex["unknown"]
                  : 0}
              </strong>
            </Col>
          </Row>
        </>
      ),
      bodyRowClasses: "",
      bodyColClasses: "",
      badgeClasses: badgeDarkClasses,
    });

    Badges.push({
      badgeTitle: BadgeTitleGen(
        faChartColumn,
        "Files: " + summary.file_summary.count.toString(),
        "text-secondary"
      ),
      badgeBody: (
        <table>
          <tbody>
            {getItemsForSummary(summary.file_summary.stats.format).map((x) => {
              return (
                <tr key={x} className="text-uppercase ms-0 ps-0 mb-2">
                  <td
                    className="ms-0 ps-3 pe-4"
                    style={{ width: "1px", whiteSpace: "nowrap" }}
                  >
                    {x.split(": ")[0]}:
                  </td>
                  <td className="fw-bold">{x.split(": ")[1]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ),
      bodyRowClasses: "",
      bodyColClasses: "mt-4 pt-3 fs-7 align-items-center",
      badgeClasses: badgeLightClasses,
    });
  }

  return (
    <Col className="px-2">
      <Row className="rounded bg-primary w-100 mx-0 mb-3 pb-5 pe-4 justify-content-evenly">
        <h4 className="fw-bold fs-2 text-white p-4 pb-4 ms-4">Statistics</h4>
        {Badges.map((x, idx) => (
          <HomeMidSectionBadge
            badgeTitle={x.badgeTitle}
            badgeBody={x.badgeBody}
            bodyRowClasses={x.bodyRowClasses}
            bodyColClasses={x.bodyColClasses}
            badgeClasses={x.badgeClasses}
            key={"home_page_badge_" + idx}
          />
        ))}
      </Row>
    </Col>
  );
};

export default HomeMidSection;
