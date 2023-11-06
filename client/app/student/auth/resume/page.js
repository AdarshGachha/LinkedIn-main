"use client";
import {
  asyncdeletecourses,
  asyncdeleteeducation,
  asyncdeletejob,
  asyncdeleteresponsibility,
  asyncdeleteskills,
} from "@/store/Actions/studentActions";
import styles from "./style.module.css";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { MdOutlineAdd } from "react-icons/md";
import { FiEdit, FiEdit2 } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";

const page = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.studentReducer);
  const [firstname, setfirstname] = useState(student && student.firstname);
  const [lastname, setlastname] = useState(student && student.lastname);
  const [email, setemail] = useState(student && student.email);
  const [contact, setcontact] = useState(student && student.contact);
  const [city, setcity] = useState(student && student.city);

  const DeleteHandler = (id) => {
    dispatch(asyncdeleteeducation(id));
  };
  const jobDeleteHandler = (id) => {
    dispatch(asyncdeletejob(id));
  };
  const internshipDeleteHandler = (id) => {
    dispatch(asyncdeleteinternship(id));
  };
  const responsibilityDeleteHandler = (id) => {
    dispatch(asyncdeleteresponsibility(id));
  };
  const coursesDeleteHandler = (id) => {
    dispatch(asyncdeletecourses(id));
  };
  const projectsDeleteHandler = (id) => {
    dispatch(asyncdeleteprojects(id));
  };
  const skillsDeleteHandler = (id) => {
    dispatch(asyncdeleteskills(id));
  };

  return (
    <div className="main1 py-12 px-56">
      <h1 className="text-2xl text-center mb-10">Resume</h1>

      <div className="main px-14 py-20 flex flex-col items-center border rounded-lg border-gray-300">
        <header className="h-40 mb-4 border border-t-0 border-l-0 border-r-0 border-gray-500 w-full">
          <div className=" flex gap-2 items-center">
            <h1 className="text-3xl">
              {firstname} {lastname}
            </h1>
            {/* < FiEdit2/> */}
          </div>

          <p className="text-gray-600">{email}</p>
          <p className="text-gray-600">{contact}</p>
          <p className="text-gray-600">{city}</p>
        </header>
        {/* <h1 className="mb-3">This os Your Resume Section</h1> */}

        <div className="mt-5 px-10 w-full">
          <div className="education-split flex items-start justify-between w-full">
            <Button className="mb-4 ml-4 w-fit h-fit rounded-lg py-2 px-4 text-secondary outline outline-1 outline-secondary bg-transparent">
              Education
            </Button>
            <div className="edu-details">
              <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Educations</DialogHeader>
                <DialogBody divider>
                  <h4>
                    <Link
                      className={`${styles.link} flex items-center gap-3 text-secondary`}
                      href="/student/auth/resume/educations/school"
                    >
                      <MdOutlineAdd />
                      Add School
                    </Link>
                  </h4>
                  <h4>
                    <Link
                      className={`${styles.link} flex items-center gap-3 text-secondary`}
                      href="/student/auth/resume/educations/graduation"
                    >
                      <MdOutlineAdd />
                      Add graduation/ post graduation
                    </Link>
                  </h4>
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="text"
                    color="gray"
                    onClick={handleOpen}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  <Button variant="gradient" color="blue" onClick={handleOpen}>
                    <span>Confirm</span>
                  </Button>
                </DialogFooter>
              </Dialog>
              <ul className="list-group">
                {student &&
                  student.resume.education.map((edu) => (
                    <div key={edu.id} className="list-group-item">
                      <Card className="w-96">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex pr-2 absolute right-0 mt-20">
                            <Button
                              size="sm"
                              className=" bg-transparent shadow-none drop-shadow-lg hover:shadow-none text-lg"
                            >
                              {edu.college && (
                                <Link
                                  className={`${styles.link} `}
                                  href={`/student/auth/resume/educations/graduation/${edu.id}`}
                                >
                                  <FiEdit className="text-primary" />
                                  {/* EDIT ICON */}
                                </Link>
                              )}
                              {edu.hs && (
                                <Link
                                  className={`${styles.link} `}
                                  href={`/student/auth/resume/educations/school/${edu.id}`}
                                >
                                  <FiEdit className="text-primary" />
                                  {/* EDIT ICON */}
                                </Link>
                              )}
                            </Button>

                            <Button
                              onClick={() => DeleteHandler(edu.id)}
                              className="bg-transparent shadow-none hover:shadow-none  text-lg drop-shadow-lg"
                              size="sm"
                            >
                              <RiDeleteBin2Line className="text-red-700" />
                              {/* DELETE ICON */}
                            </Button>
                          </div>
                        </div>

                        {edu.college && (
                          <CardBody className="">
                            {edu.stream && (
                              <div className="flex">
                                <Typography
                                  variant="h5"
                                  color="blue-gray"
                                  className="text-black"
                                >
                                  {edu.degree}
                                </Typography>
                                <Typography variant="h5" className="text-black">
                                  ,{edu.stream}
                                </Typography>
                              </div>
                            )}

                            <Typography color="blue-gray" className="mt-2">
                              {edu.college}
                            </Typography>
                            <div className="flex gap-4">
                              <Typography color="blue-gray">
                                {edu.start}
                              </Typography>
                              <Typography color="blue-gray">
                                {edu.end}
                              </Typography>
                            </div>
                          </CardBody>
                        )}
                        {edu.hs && (
                          <CardBody className="">
                            {edu.hs && (
                              <Typography variant="h5" className="text-black">
                                {edu.hs}
                              </Typography>
                            )}

                            <Typography color="blue-gray" className="mb-2">
                              {edu.status}
                            </Typography>
                            <Typography color="blue-gray" className="mb-2">
                              {edu.school ? `${edu.school}` : `${edu.degree}`}
                            </Typography>
                            <Typography color="blue-gray" className="mb-2">
                              {edu.status == "Pursuing"
                                ? `Expected year of Completion: ${edu.year}`
                                : `Year of Completion: ${edu.year}`}
                            </Typography>
                            <Typography color="blue-gray" className="mb-2">
                              Board : {edu.board}
                            </Typography>

                            <Typography color="blue-gray">
                              performance : {edu.Percentage}
                            </Typography>
                          </CardBody>
                        )}
                      </Card>
                      <br />
                      <br />
                    </div>
                  ))}
              </ul>

              <Button
                className="flex items-center gap-2 bg-white text-black outline outline-1 outline-blue-gray-400"
                onClick={handleOpen}
                size="sm"
              >
                <MdOutlineAdd className="text-2xl" />
                ADD EDUCATION
              </Button>
            </div>
          </div>

          <br />
          <hr />
          <br />

          {/* job section */}
          <div className="job-split flex items-start justify-between w-full">
            <Button className="mb-4 ml-4 rounded-lg py-2 px-4 w-fit text-secondary outline outline-1 outline-secondary bg-transparent">
              Job
            </Button>
            <div className="job-details">
              <ul className="list-group">
                {student &&
                  student.resume.jobs.map((job) => (
                    <div key={job.id} className="list-group-item">
                      <Card className="w-96">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex pr-2 absolute right-0 mt-20">
                            <Button
                              size="sm"
                              className=" bg-transparent shadow-none drop-shadow-lg hover:shadow-none text-lg"
                            >
                              <Link
                                className={`${styles.link} `}
                                href={`/student/auth/resume/jobs/${job.id}`}
                              >
                                <FiEdit className="text-primary" />
                                {/* EDIT ICON */}
                              </Link>
                            </Button>

                            <Button
                              onClick={() => jobDeleteHandler(job.id)}
                              className="bg-transparent shadow-none hover:shadow-none  text-lg drop-shadow-lg"
                              size="sm"
                            >
                              <RiDeleteBin2Line className="text-red-700" />
                              {/* DELETE ICON */}
                            </Button>
                          </div>
                        </div>

                        <CardBody className="">
                          {job.profile && (
                            <Typography variant="h5" className="text-black">
                              {job.profile}
                            </Typography>
                          )}

                          <Typography color="blue-gray" className="mb-2">
                            {job.organization}
                          </Typography>
                          <Typography color="blue-gray" className="mb-2">
                            {job.location}
                          </Typography>
                          <Typography color="blue-gray" className="mb-2">
                            {job.start} - {job.end}
                          </Typography>
                          <Typography color="blue-gray" className="mb-2">
                            {job.description}
                          </Typography>
                        </CardBody>
                      </Card>
                      <br />
                      <br />
                    </div>
                  ))}
              </ul>
              <Button
                className="flex items-center gap-2 bg-white text-black outline outline-1 outline-blue-gray-400"
                size="sm"
              >
                <MdOutlineAdd className="text-2xl" />

                <Link className={styles.link} href="/student/auth/resume/jobs">
                  ADD JOB
                </Link>
              </Button>
            </div>
          </div>

          <br />
          <hr />
          <br />

          {/* internship section */}
          <div className="internship-split flex items-start justify-between w-full">
            <Button className="mb-4 ml-4 rounded-lg py-2 px-4 w-fit text-secondary outline outline-1 outline-secondary bg-transparent">
              internship
            </Button>
            <div className="internship-details">
              <ul className="list-group">
                {student &&
                  student.resume.internships.map((internship) => (
                    <div key={internship.id} className="list-group-item">
                      <Card className="w-96">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex pr-2 absolute right-0 mt-20">
                            <Button
                              size="sm"
                              className=" bg-transparent shadow-none drop-shadow-lg hover:shadow-none text-lg"
                            >
                              <Link
                                className={`${styles.link} `}
                                href={`/student/auth/resume/internships/${internship.id}`}
                              >
                                <FiEdit className="text-primary" />
                                {/* EDIT ICON */}
                              </Link>
                            </Button>

                            <Button
                              onClick={() =>
                                internshipDeleteHandler(internship.id)
                              }
                              className="bg-transparent shadow-none hover:shadow-none  text-lg drop-shadow-lg"
                              size="sm"
                            >
                              <RiDeleteBin2Line className="text-red-700" />
                              {/* DELETE ICON */}
                            </Button>
                          </div>
                        </div>

                        <CardBody className="">
                          {internship.profile && (
                            <Typography variant="h5" className="text-black">
                              {internship.profile}
                            </Typography>
                          )}

                          <Typography color="blue-gray" className="mb-2">
                            {internship.organization}
                          </Typography>
                          <Typography color="blue-gray" className="mb-2">
                            {internship.location}
                          </Typography>
                          <Typography color="blue-gray" className="mb-2">
                            {internship.start} - {internship.end}
                          </Typography>
                          <Typography color="blue-gray" className="mb-2">
                            {internship.description}
                          </Typography>
                        </CardBody>
                      </Card>
                      <br />
                      <br />
                    </div>
                  ))}
              </ul>
              <Button
                className="flex items-center gap-2 bg-white text-black outline outline-1 outline-blue-gray-400"
                size="sm"
              >
                <MdOutlineAdd className="text-2xl" />

                <Link
                  className={styles.link}
                  href="/student/auth/resume/internship"
                >
                  ADD internship
                </Link>
              </Button>
            </div>
          </div>

          <br />
          <hr />
          <br />

          {/* resposibility section */}
          <div className="resposibility-split flex items-start justify-between w-full">
            <Button className="mb-4 ml-4 rounded-lg py-2 px-4 w-fit text-secondary outline outline-1 outline-secondary bg-transparent">
              responsibility
            </Button>
            <div className="resposibility-details">
              <ul className="list-group">
                {student &&
                  student.resume.responsibilities.map((responsibility) => (
                    <div key={responsibility.id} className="list-group-item">
                      <Card className="w-96">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex pr-2 absolute right-0 mt-20">
                            <Button
                              size="sm"
                              className=" bg-transparent shadow-none drop-shadow-lg hover:shadow-none text-lg"
                            >
                              <Link
                                className={`${styles.link} `}
                                href={`/student/auth/resume/responsibility/${responsibility.id}`}
                              >
                                <FiEdit className="text-primary" />
                                {/* EDIT ICON */}
                              </Link>
                            </Button>

                            <Button
                              onClick={() =>
                                responsibilityDeleteHandler(responsibility.id)
                              }
                              className="bg-transparent shadow-none hover:shadow-none  text-lg drop-shadow-lg"
                              size="sm"
                            >
                              <RiDeleteBin2Line className="text-red-700" />
                              {/* DELETE ICON */}
                            </Button>
                          </div>
                        </div>

                        <CardBody className="">
                          <Typography color="blue-gray" className="mb-2">
                            {responsibility.description}
                          </Typography>
                        </CardBody>
                      </Card>
                      <br />
                      <br />
                    </div>
                  ))}
              </ul>
              <Button
                className="flex items-center gap-2 bg-white text-black outline outline-1 outline-blue-gray-400"
                size="sm"
              >
                <MdOutlineAdd className="text-2xl" />

                <Link
                  className={styles.link}
                  href="/student/auth/resume/responsibility"
                >
                  ADD Responsibility
                </Link>
              </Button>
            </div>
          </div>

          <br />
          <hr />
          <br />

          {/* Courses section */}
          <div className="Courses-split flex items-start justify-between w-full">
            <Button className="mb-4 ml-4 rounded-lg py-2 px-4 w-fit text-secondary outline outline-1 outline-secondary bg-transparent">
              courses
            </Button>
            <div className="Courses-details">
              <ul className="list-group">
                {student &&
                  student.resume.courses.map((courses) => (
                    <div key={courses.id} className="list-group-item">
                      <Card className="w-96">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex pr-2 absolute right-0 mt-20">
                            <Button
                              size="sm"
                              className=" bg-transparent shadow-none drop-shadow-lg hover:shadow-none text-lg"
                            >
                              <Link
                                className={`${styles.link} `}
                                href={`/student/auth/resume/courses/${courses.id}`}
                              >
                                <FiEdit className="text-primary" />
                                {/* EDIT ICON */}
                              </Link>
                            </Button>

                            <Button
                              onClick={() => coursesDeleteHandler(courses.id)}
                              className="bg-transparent shadow-none hover:shadow-none  text-lg drop-shadow-lg"
                              size="sm"
                            >
                              <RiDeleteBin2Line className="text-red-700" />
                              {/* DELETE ICON */}
                            </Button>
                          </div>
                        </div>

                        <CardBody className="">
                          {courses.program && (
                            <Typography variant="h5" className="text-black">
                              {courses.program}
                            </Typography>
                          )}

                          <Typography color="blue-gray" className="mb-2">
                            {courses.organization}
                          </Typography>
                          <Typography color="blue-gray" className="mb-2">
                            {courses.location}
                          </Typography>
                          <Typography color="blue-gray" className="mb-2">
                            {courses.start} - {courses.end}
                          </Typography>
                          <Typography color="blue-gray" className="mb-2">
                            {courses.description}
                          </Typography>
                        </CardBody>
                      </Card>
                      <br />
                      <br />
                    </div>
                  ))}
              </ul>
              <Button
                className="flex items-center gap-2 bg-white text-black outline outline-1 outline-blue-gray-400"
                size="sm"
              >
                <MdOutlineAdd className="text-2xl" />

                <Link
                  className={styles.link}
                  href="/student/auth/resume/courses"
                >
                  ADD Courses
                </Link>
              </Button>
            </div>
          </div>

          <br />
          <hr />
          <br />

          {/* Projects section */}
          <div className="Projects-split flex items-start justify-between w-full">
            <Button className="mb-4 ml-4 rounded-lg py-2 px-4 w-fit text-secondary outline outline-1 outline-secondary bg-transparent">
              projects
            </Button>
            <div className="Projects-details">
              <ul className="list-group">
                {student &&
                  student.resume.projects.map((projects) => (
                    <div key={projects.id} className="list-group-item">
                      <Card className="w-96">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex pr-2 absolute right-0 mt-20">
                            <Button
                              size="sm"
                              className=" bg-transparent shadow-none drop-shadow-lg hover:shadow-none text-lg"
                            >
                              <Link
                                className={`${styles.link} `}
                                href={`/student/auth/resume/projects/${projects.id}`}
                              >
                                <FiEdit className="text-primary" />
                                {/* EDIT ICON */}
                              </Link>
                            </Button>

                            <Button
                              onClick={() => projectsDeleteHandler(projects.id)}
                              className="bg-transparent shadow-none hover:shadow-none  text-lg drop-shadow-lg"
                              size="sm"
                            >
                              <RiDeleteBin2Line className="text-red-700" />
                              {/* DELETE ICON */}
                            </Button>
                          </div>
                        </div>

                        <CardBody className="">
                          {projects.title && (
                            <Typography variant="h5" className="text-black">
                              {projects.title}
                            </Typography>
                          )}

                          <Typography color="blue-gray" className="mb-2">
                            {projects.start} - {projects.end}
                          </Typography>
                          <Typography color="blue-gray" className="mb-2">
                            {projects.description}
                          </Typography>
                          <Typography className="mb-2 text-secondary cursor-pointer break-words">
                            <a
                              href={projects.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {projects.link}
                            </a>
                          </Typography>
                        </CardBody>
                      </Card>
                      <br />
                      <br />
                    </div>
                  ))}
              </ul>
              <Button
                className="flex items-center gap-2 bg-white text-black outline outline-1 outline-blue-gray-400"
                size="sm"
              >
                <MdOutlineAdd className="text-2xl" />

                <Link
                  className={styles.link}
                  href="/student/auth/resume/projects"
                >
                  ADD Projects
                </Link>
              </Button>
            </div>
          </div>

          <br />
          <hr />
          <br />

          {/* skills section */}
          <div className="skills-split flex items-start justify-between w-full">
            <Button className="mb-4 ml-4 rounded-lg py-2 px-4 w-fit text-secondary outline outline-1 outline-secondary bg-transparent">
              Skills
            </Button>
            <div className="skills-details w-96">
              <ul className="list-group flex gap-2 flex-wrap sm:w-80">
                {student &&
                  student.resume.skills.map((skills) => (
                    <div key={skills.id} className="list-group-item">
                      <Button size="sm" className="bg-transparent">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex pr-2 ">
                            <CardBody className="text-gray-800">
                              {skills.skills}
                            </CardBody>
                            <Button
                              size="sm"
                              className=" bg-transparent shadow-none drop-shadow-lg hover:shadow-none text-lg"
                            >
                              <Link
                                className={`${styles.link} `}
                                href={`/student/auth/resume/skills/${skills.id}`}
                              >
                                <FiEdit className="text-primary" />
                                {/* EDIT ICON */}
                              </Link>
                            </Button>

                            <Button
                              onClick={() => skillsDeleteHandler(skills.id)}
                              className="bg-transparent shadow-none hover:shadow-none  text-lg drop-shadow-lg"
                              size="sm"
                            >
                              <RiDeleteBin2Line className="text-red-700" />
                              {/* DELETE ICON */}
                            </Button>
                          </div>
                        </div>
                      </Button>
                    </div>
                  ))}
              </ul>
              <Button
                className="flex mt-6 items-center gap-2 bg-white text-black outline outline-1 outline-blue-gray-400"
                size="sm"
              >
                <MdOutlineAdd className="text-2xl" />

                <Link
                  className={styles.link}
                  href="/student/auth/resume/skills"
                >
                  ADD Skills
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
