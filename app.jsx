import React, { useState, useMemo } from 'react';
import { 
  Plus, 
  Github, 
  ExternalLink, 
  Pencil, 
  User, 
  Briefcase, 
  Code, 
  Trash2, 
  X,
  Users,
  Layers
} from 'lucide-react';

/**
 * SHARED COMPONENTS
 */

// Reusable Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-800 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-700">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors">
            <X size={20} className="text-slate-500" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

const SectionHeader = ({ title, icon: Icon, onAdd }) => (
  <div className="flex items-center justify-between mb-8">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-indigo-500 rounded-lg text-white">
        <Icon size={24} />
      </div>
      <h2 className="text-3xl font-bold text-slate-800 dark:text-white">{title}</h2>
    </div>
    <button 
      onClick={onAdd}
      className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition-all shadow-lg shadow-indigo-200 active:scale-95"
    >
      <Plus size={20} />
      <span className="font-semibold">Add New</span>
    </button>
  </div>
);

/**
 * MAIN APPLICATION
 */
export default function PortfolioApp() {
  // Data State
  const [students, setStudents] = useState([]);
  const [projects, setProjects] = useState([]);

  // Modal State
  const [studentModal, setStudentModal] = useState({ open: false, data: null });
  const [projectModal, setProjectModal] = useState({ open: false, data: null });

  /**
   * STUDENT LOGIC
   */
  const handleSaveStudent = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const studentData = {
      id: studentModal.data?.id || Date.now(),
      name: formData.get('name'),
      role: formData.get('role'),
      github: formData.get('github'),
    };

    if (studentModal.data) {
      setStudents(students.map(s => s.id === studentData.id ? studentData : s));
    } else {
      setStudents([...students, studentData]);
    }
    setStudentModal({ open: false, data: null });
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
    setProjects(projects.filter(p => p.authorId !== id)); // Cleanup projects
    setStudentModal({ open: false, data: null });
  };

  /**
   * PROJECT LOGIC
   */
  const handleSaveProject = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const projectData = {
      id: projectModal.data?.id || Date.now(),
      title: formData.get('title'),
      desc: formData.get('desc'),
      techs: formData.get('techs').split(',').map(t => t.trim()),
      link: formData.get('link'),
      authorId: Number(formData.get('authorId')),
    };

    if (projectModal.data) {
      setProjects(projects.map(p => p.id === projectData.id ? projectData : p));
    } else {
      setProjects([...projects, projectData]);
    }
    setProjectModal({ open: false, data: null });
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
    setProjectModal({ open: false, data: null });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans transition-colors duration-300">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            CORESTACK<span className="text-slate-800 dark:text-white">.STUDIO</span>
          </h1>
          <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">Team Portfolio v1.0</div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        
        {/* STUDENTS SECTION */}
        <section className="mb-20">
          <SectionHeader 
            title="Team Members" 
            icon={Users} 
            onAdd={() => setStudentModal({ open: true, data: null })} 
          />
          
          {students.length === 0 ? (
            <div className="text-center py-20 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
              <p className="text-slate-400">No members onboarded yet. Click "Add New" to start.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {students.map(student => (
                <div key={student.id} className="group relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
                  <button 
                    onClick={() => setStudentModal({ open: true, data: student })}
                    className="absolute top-4 right-4 p-2 opacity-0 group-hover:opacity-100 bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 rounded-lg transition-all"
                  >
                    <Pencil size={16} />
                  </button>
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <User size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{student.name}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-4 uppercase tracking-wider">{student.role}</p>
                  <a href={student.github} target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:hover:text-white text-sm transition-colors">
                    <Github size={16} /> GitHub Profile
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* PROJECTS SECTION */}
        <section>
          <SectionHeader 
            title="Recent Work" 
            icon={Layers} 
            onAdd={() => setProjectModal({ open: true, data: null })} 
          />

          {projects.length === 0 ? (
            <div className="text-center py-20 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
              <p className="text-slate-400">No projects listed yet. Connect your first masterpiece.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map(project => {
                const author = students.find(s => s.id === project.authorId);
                return (
                  <div key={project.id} className="group relative bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-2xl">
                          <Briefcase className="text-indigo-600" size={24} />
                        </div>
                        <button 
                          onClick={() => setProjectModal({ open: true, data: project })}
                          className="p-2 bg-slate-50 dark:bg-slate-700 text-slate-400 hover:text-indigo-600 rounded-xl transition-all"
                        >
                          <Pencil size={18} />
                        </button>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">{project.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">{project.desc}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techs.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-lg uppercase">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-700">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-[10px] font-bold">
                            {author?.name.charAt(0) || '?'}
                          </div>
                          <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                            {author?.name || 'Unknown Author'}
                          </span>
                        </div>
                        <a href={project.link} target="_blank" className="text-indigo-600 hover:underline inline-flex items-center gap-1 text-sm font-bold">
                          View Project <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>

      {/* STUDENT MODAL */}
      <Modal 
        isOpen={studentModal.open} 
        onClose={() => setStudentModal({ open: false, data: null })}
        title={studentModal.data ? "Edit Member" : "Add New Member"}
      >
        <form onSubmit={handleSaveStudent} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
            <input 
              required name="name" defaultValue={studentModal.data?.name}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Role</label>
            <select 
              name="role" defaultValue={studentModal.data?.role}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option>Frontend</option>
              <option>Backend</option>
              <option>Full-Stack</option>
              <option>Designer</option>
              <option>DevOps</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">GitHub URL</label>
            <input 
              required name="github" defaultValue={studentModal.data?.github}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="https://github.com/username"
            />
          </div>
          <div className="flex gap-3 pt-4">
            <button type="submit" className="flex-1 bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors">
              Save Member
            </button>
            {studentModal.data && (
              <button 
                type="button"
                onClick={() => deleteStudent(studentModal.data.id)}
                className="p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors"
              >
                <Trash2 size={20} />
              </button>
            )}
          </div>
        </form>
      </Modal>

      {/* PROJECT MODAL */}
      <Modal 
        isOpen={projectModal.open} 
        onClose={() => setProjectModal({ open: false, data: null })}
        title={projectModal.data ? "Edit Project" : "Add New Project"}
      >
        <form onSubmit={handleSaveProject} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Project Title</label>
            <input 
              required name="title" defaultValue={projectModal.data?.title}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Description</label>
            <textarea 
              required name="desc" defaultValue={projectModal.data?.desc}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none h-24 resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Author</label>
              <select 
                required name="authorId" defaultValue={projectModal.data?.authorId}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option value="">Select Member</option>
                {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Tech Stack</label>
              <input 
                required name="techs" defaultValue={projectModal.data?.techs.join(', ')}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="React, Tailwind..."
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Project Link</label>
            <input 
              required name="link" defaultValue={projectModal.data?.link}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="https://demo.com"
            />
          </div>
          <div className="flex gap-3 pt-4">
            <button type="submit" className="flex-1 bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors">
              Save Project
            </button>
            {projectModal.data && (
              <button 
                type="button"
                onClick={() => deleteProject(projectModal.data.id)}
                className="p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors"
              >
                <Trash2 size={20} />
              </button>
            )}
          </div>
        </form>
      </Modal>

      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-slate-400 text-sm">© 2026 CoreStack Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}