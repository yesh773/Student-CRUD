import { useState,useEffect } from 'react'
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

const API_URL = "http://localhost:8080/api/students";

function App() {
 
  const [students, setStudents] = useState([]);

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(false);

  const fetchStudents = async () => {

    try {

      setLoading(true);

      const response = await fetch(API_URL);

      const data = await response.json();

      setStudents(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  };


  useEffect(() => {

    fetchStudents();

  }, []);


  const handleChange = (e) => {

    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const url =
        editingId
          ? `${API_URL}/${editingId}`
          : API_URL;

      const method =
        editingId
          ? "PUT"
          : "POST";

      const response = await fetch(url, {

        method,

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(student)
      });


      if (!response.ok) {

        const error = await response.json();

        alert(
          Object.values(error).join("\n")
        );

        return;
      }


      resetForm();

      fetchStudents();

    } catch (error) {

      console.error(error);
    }
  };


  const editStudent = (student) => {

    setStudent({
      name: student.name,
      email: student.email,
      course: student.course
    });

    setEditingId(student.id);
  };


  const deleteStudent = async (id) => {

    const confirmed =
      window.confirm(
        "Are you sure you want to delete this student?"
      );

    if (!confirmed) return;


    try {

      await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });

      fetchStudents();

    } catch (error) {

      console.error(error);
    }
  };


  const resetForm = () => {

    setStudent({
      name: "",
      email: "",
      course: ""
    });

    setEditingId(null);
  };

  return (
    <>
  
    <div className="min-h-screen bg-slate-100">
<header className="bg-slate-900 text-white">

        <div className="max-w-6xl mx-auto px-6 py-5">

          <h1 className="text-2xl font-bold">
            Student Management
          </h1>

        
        </div>

      </header>
       <main className="max-w-6xl mx-auto px-6 py-8">

        <StudentForm
          student={student}
          editingId={editingId}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          resetForm={resetForm}
        />
          <div className="mt-8">

          <StudentTable
            students={students}
            loading={loading}
            editStudent={editStudent}
            deleteStudent={deleteStudent}
          />

        </div>
       </main>
    </div>
    </>
  )
}

export default App

