import { useSelector } from "react-redux";
import { machineTypeList as typeList } from "./../../store/databaseSlice";
import MachinesByType from "./MachinesByType";
const AllMachines = () => {
  const machineTypeList = useSelector(typeList);

  return (
    <>
      {machineTypeList.map((element, index) => (
        <MachinesByType key={index} data={element} />
      ))}
    </>
  );
};

export default AllMachines;
