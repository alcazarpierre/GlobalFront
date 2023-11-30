import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProjects } from '../../../../redux/actionsProjects'; 

const ProyectosMiembro = ({ onChange, initialSelectedProjects }) => {
    const dispatch = useDispatch();
    const projectsList = useSelector((state) => state.reducerProjects.allProjects)
    const [selectedProject, setSelectedProject] = useState('');
    const [selectedProjectsList, setSelectedProjectsList] = useState([]);
    
  useEffect (() => {
    dispatch(getAllProjects());
  },[dispatch]);

  useEffect(() => {
    if (initialSelectedProjects && initialSelectedProjects.length > 0) {
      setSelectedProjectsList(initialSelectedProjects);
    } else {
      setSelectedProjectsList([]);
    }
  }, [initialSelectedProjects]);

  const handleSelectChange = (projectId) => {
    const selectedProjectObject = projectsList.find((project) => project.id === parseInt(projectId, 10));
    if (selectedProjectObject && !selectedProjectsList.includes(selectedProjectObject.id)) {
        const updatedList = [...selectedProjectsList, selectedProjectObject.id];
        setSelectedProjectsList(updatedList);
        onChange({
            target: { name: 'postId', value: updatedList },
        });
    }
};

    const handleDelete = (projectId) => {
      const updatedList = selectedProjectsList.filter((project) => project !== projectId);
      setSelectedProjectsList(updatedList);
      onChange({
        target: { name: 'postId', value: updatedList },
      });
    };
    
  return (
    <div className='projects-container'>
      <select 
        name='postId' 
        id='postId-select' 
        value={selectedProject} 
        onChange={(event) => handleSelectChange(event.target.value)} 
        >
          <option value="">- Seleccione Proyectos -</option>
          {projectsList.map(projectsOption => 
            <option key={projectsOption.id} value={projectsOption.id}>
              {projectsOption.title}
            </option>
          )}
      </select>

      <div className='selected-projects-list'>
          {selectedProjectsList.map((projectId) => (
            <div key={projectId} className='selected-project'>
                <button className='delete-button-project-list' onClick={() => handleDelete(projectId)}>X</button>
                {projectsList.find((project) => project.id === projectId)?.title}
            </div>
          ))}
      </div>

    </div>
  )
}

export default ProyectosMiembro
