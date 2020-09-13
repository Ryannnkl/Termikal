import React from "react";
import { FiPlus, FiSettings, FiAlertCircle, FiDelete } from "react-icons/fi";
import { Container, Button } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Button>
        <FiPlus size={22} color="#E1E1E6" />
      </Button>
      <Button>
        <FiDelete size={22} color="#E1E1E6" />
      </Button>
      <Button>
        <FiSettings size={22} color="#E1E1E6" />
      </Button>
      <Button>
        <FiAlertCircle size={22} color="#E1E1E6" />
      </Button>
    </Container>
  );
};

export default Dashboard;
