import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import { CardContainer, CardHeader, CardBody } from "./LogCardComponent.styles";
import { pink } from "@mui/material/colors";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SaveIcon from "@mui/icons-material/Save";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { useEffect, useState } from "react";

export const LogCardComponent = ({ method, value }) => {
  const [initialValue, setInitialValue] = useState(0);
  const translate = {
    create: {
      pt: "Criação",
      verb: "POST",
      icon: <SaveIcon color="success" />,
    },
    read: {
      pt: "Leitura",
      verb: "GET",
      icon: <MenuBookIcon color="primary" />,
    },
    update: {
      pt: "Atualização",
      verb: "PUT",
      icon: <UpgradeIcon color="secondary" />,
    },
    delete: {
      pt: "Remoção",
      verb: "DELETE",
      icon: <DeleteForeverIcon sx={{ color: pink[500] }} />,
    },
  };

  useEffect(() => {
    setInitialValue(0);
    value?.map((log) => {
      if (log.httpVerb == translate[method].verb.toLowerCase()) {
        setInitialValue((prevState) => (prevState += 1));
      }
    });
  }, [value]);
  return (
    <CardContainer>
      <CardHeader>
        <div>
          <h3>{translate[method].pt}</h3>
        </div>
        <div>{translate[method].icon}</div>
      </CardHeader>
      <CardBody>
        <div>
          <small>{method}</small>
          <small>{translate[method].verb}</small>
        </div>
        <div>
          <h2>{initialValue}</h2>
        </div>
      </CardBody>
    </CardContainer>
  );
};

LogCardComponent.propTypes = {
  value: PropTypes.number,
  method: PropTypes.string,
};
