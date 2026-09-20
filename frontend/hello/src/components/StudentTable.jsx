function StudentTable({
  students,
  loading,
  editStudent,
  deleteStudent
}) {

  return (

    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

      

      <div className="px-6 py-5 border-b border-slate-200">

        <h2 className="text-xl font-semibold text-slate-800">
          Students
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          {students.length} students registered
        </p>

      </div>


    

      {loading && (

        <div className="p-10 text-center text-slate-500">
          Loading students...
        </div>

      )}


   

      {!loading && students.length === 0 && (

        <div className="p-10 text-center">

          <p className="text-slate-500">
            No students found.
          </p>

        </div>

      )}


      

      {!loading && students.length > 0 && (

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                  ID
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                  Name
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                  Email
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                  Course
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase">
                  Actions
                </th>

              </tr>

            </thead>


            <tbody className="divide-y divide-slate-200">

              {students.map((student) => (

                <tr
                  key={student.id}
                  className="hover:bg-slate-50 transition"
                >

                  <td className="px-6 py-4 text-sm text-slate-500">
                    #{student.id}
                  </td>

                  <td className="px-6 py-4">

                    <p className="font-medium text-slate-800">
                      {student.name}
                    </p>

                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {student.email}
                  </td>

                  <td className="px-6 py-4">

                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                      {student.course}
                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <div className="flex justify-end gap-2">

                      <button
                        onClick={() =>
                          editStudent(student)
                        }
                        className="px-4 py-2 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 text-sm font-medium"
                      >
                        Edit
                      </button>


                      <button
                        onClick={() =>
                          deleteStudent(student.id)
                        }
                        className="px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}

export default StudentTable;