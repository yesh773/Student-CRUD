function StudentForm({
  student,
  editingId,
  handleChange,
  handleSubmit,
  resetForm
}) {

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-xl font-semibold text-slate-800">

            {editingId
              ? "Edit Student"
              : "Add Student"}

          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Enter student information below
          </p>

        </div>

      </div>


      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >

       

        <div>

          <label className="block text-sm font-medium text-slate-700 mb-2">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

        </div>


     

        <div>

          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

        </div>


   

        <div>

          <label className="block text-sm font-medium text-slate-700 mb-2">
            Course
          </label>

          <input
            type="text"
            name="course"
            value={student.course}
            onChange={handleChange}
            placeholder="Computer Science"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

        </div>


       

        <div className="md:col-span-3 flex gap-3">

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >

            {editingId
              ? "Update Student"
              : "Add Student"}

          </button>


          {editingId && (

            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-3 rounded-xl bg-slate-200 text-slate-700 font-medium hover:bg-slate-300 transition"
            >
              Cancel
            </button>

          )}

        </div>

      </form>

    </div>
  );
}

export default StudentForm;