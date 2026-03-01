// components/ProjectList.jsx
import { useState, useEffect } from 'react';

import SkeletonCard from './SkeletonCard';


export default function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 模拟 API 调用
        const fetchProjects = async () => {
            try {
                setLoading(true);
                // 模拟网络延迟
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // 模拟 API 响应
                const data = [
                    { id: 1, title: '项目1', description: '描述...' },
                    { id: 2, title: '项目2', description: '描述...' },
                ];
                
                setProjects(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <div className="project-list-loading">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        );
    }
    
}


