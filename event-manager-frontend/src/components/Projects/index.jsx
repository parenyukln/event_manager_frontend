import { withAppLayout } from '../../hocs/withAppLayout';
import { Row, Col } from 'antd';
import { ProjectCard } from './ProjectCard';

const mockProjects = [
    {
        id: 1,
        name: 'Проект 1',
        users: [],
    },
    {
        id: 2,
        name: 'Проект 2',
        users: [],
    },
    {
        id: 3,
        name: 'Проект 3',
        users: [],
    },
    {
        id: 4,
        name: 'Проект 4',
        users: [],
    },
    {
        id: 5,
        name: 'Проект 5',
        users: [],
    },
    {
        id: 6,
        name: 'Проект 6',
        users: [],
    },
];

const Projects = () => {
    return (
        <Row gutter={[24, 24]}>
            {mockProjects.map((project) => (
                <Col key={project.id} span={8}>
                    <ProjectCard {...project} />
                </Col>
            ))}
        </Row>
    );
};

export default withAppLayout(Projects);
