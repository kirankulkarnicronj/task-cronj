export const fetchStudentData = (studentId) => {
  // Simulate API delay in milliseconds
  const delay = 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Mock data for the student
      const studentData = [
        { schoolId: "200", legalguardianId: "30", name: "John Doe", age: 20 }
        // Add more properties as needed
      ];
      resolve(studentData);
    }, delay);
  });
};

export const fetchSchoolData = (schoolId) => {
  const delay = 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Mock data for the student
      const studentData = {
        id: schoolId,
        name: "John Doe",
        age: 20
        // Add more properties as needed
      };

      resolve(studentData);
    }, delay);
  });
};

export const fetchLegalguardianData = (legalguardianId) => {
  const delay = 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Mock data for the student
      const studentData = {
        id: legalguardianId,
        name: "John Doe",
        age: 20
        // Add more properties as needed
      };

      resolve(studentData);
    }, delay);
  });
};
