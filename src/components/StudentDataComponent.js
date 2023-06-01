import { useEffect, useState } from "react";
import {
  fetchStudentData,
  fetchSchoolData,
  fetchLegalguardianData
} from "../utils/index";

const StudentsDataComponent = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [schoolsData, setSchoolsData] = useState([]);
  const [legalguardiansData, setLegalguardiansData] = useState([]);

  console.log(studentsData, schoolsData, legalguardiansData);

  const onStudentsPick = async (studentIds) => {
    //After fetching data we are storing data inside these three arrays for student,school and legalguardianData
    //becasue of this local arrays we removed unwanted re-rendering of data in the page
    const newStudentsArray = [];
    const newSchoolData = [];
    const newLegalguardianData = [];

    for (const studentId of studentIds) {
      //here we are looping the data and getting new data from api and pushing it into array to stop re-rendering everytime
      const studentData = await fetchStudentData(studentId);
      newStudentsArray.push(studentData);
      for (const student of studentData) {
        const { schoolId, legalguardianId } = student;
        //here we are looping the student data and getting new data from api and pushing it into array to stop re-rendering everytime

        //we using promises for better api optimisation and error handling
        Promise.all([
          fetchSchoolData(schoolId),
          fetchLegalguardianData(legalguardianId)
        ])
          //Once api is success then we are pushing api response into array
          .then(([schoolData, legalguardianData]) => {
            newSchoolData.push(schoolData);
            newLegalguardianData.push(legalguardianData);
          })
          //if api get failed or error then we are catching the api error on this function
          .catch((error) => {
            console.log("error", error);
            return error;
          });
      }
    }
    //once api is success then we are adding all data into the states
    setStudentsData(newStudentsArray);
    setSchoolsData(newSchoolData);
    setLegalguardiansData(newLegalguardianData);
  };

  return (
    <>
      <button onClick={() => onStudentsPick([20, 21, 22, 23])}>Click</button>
    </>
  );
};

export default StudentsDataComponent;
