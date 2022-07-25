import { useSelector } from "react-redux";
import { machineTypeList as typeList } from "./../../store/machineTypeSlice";
import MachinesByType from "./MachinesByType";
const AllMachines = () => {
  const machineTypeList = useSelector(typeList);

  return (
    <>
      {machineTypeList.map((element) => (
        <MachinesByType data={element} />
      ))}
    </>
  );
};

export default AllMachines;
