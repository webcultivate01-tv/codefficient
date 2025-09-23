import { NavLink} from "react-router-dom";

export default function CoursesDropdown() {
  const courses = [
    "Java Full Stack Developer Course (with Placement)",
    "Online MERN Stack Course (with Placement)",
    "MEAN Stack Developer Training",
    "Full Stack Course for Beginners Online",
  ];

  return (
    <li className="relative cursor-pointer group">
      {/* Dropdown Toggle */}
      <span className="flex justify-between items-center hover:text-gray-300">
        Courses
      </span>

      {/* Dropdown Menu */}
      <ul
        className="absolute left-0 top-full bg-white text-black shadow-lg rounded-md w-80 z-60 
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all mt-5"
      >
        {courses.map((course, idx) => (
          <li key={idx} className="px-4 py-2 hover:bg-gray-200">
            <NavLink to={`/courses/${course.toLowerCase().replace(/ /g, "-")}`}>
              {course}
            </NavLink>
          </li>
        ))
        }
      </ul>
    </li>
  );
}
