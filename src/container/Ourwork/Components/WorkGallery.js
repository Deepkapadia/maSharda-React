import React,{useState,useEffect} from 'react'

function WorkGallery() {
    const portfolio = [
        {
            id:1,
            size: 'large',
            image:'port-bg-1',
            name: 'DEEP KAPADIA IMAGES SAMPLE TEXT',
            category: ['all', 'Education', 'Farmar Support']
        },
        {
            id:2,
            size: 'large',
            image:'port-bg-2',
            name: 'DEEP KAPADIA IMAGES SAMPLE TEXT',
            category: ['all', 'Cooperative Society', 'Farmar Support'],
        },
        {
            id:3,
            size: 'large',
            image:'port-bg-3',
            name: 'DEEP KAPADIA IMAGES SAMPLE TEXT',
            category: ['all', 'Education'],
        },
        {
            id:4,
            size: 'large',
            image:'port-bg-5',
            name: ['DEEP KAPADIA IMAGES SAMPLE TEXT'],
            category: ['all', 'others'],
        },
        { 
            id:5,
            size: 'wide',
            image:'port-bg-4',
            name: 'DEEP KAPADIA IMAGES SAMPLE TEXT',
            category: ['all', 'Education', 'Other Humanitarian work'],
        }
      ];
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(portfolio);
    },[]);

    useEffect(() => {
        setProjects([]);
        const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
    }, [filter]);

    return (
        <div className="event-container">
            <div className="container">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-content text-center" data-aos="fade-down">
                                <div className="sec-title">
                                    <span className="title">Recent Activities</span>
                                    <h2>Have a look on our<span> Recent Activities</span></h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eligendi vitae
                                    perferendis voluptatum voluptatibus dolores architecto doloribus excepturi natus
                                    facere voluptates, nesciunt consequatur.
                                </p>
                                <ul className="port-menu">
                                    <li active={filter === 'all' ? 'all' : ''} onClick={() => setFilter('all')}>All</li>
                                    <li active={filter === 'Education' ? 'Education' : 'all'} onClick={() => setFilter('Education')}>Education</li>
                                    <li active={filter === 'Cooperative Society' ? 'Cooperative Society' : 'all'} onClick={() => setFilter('Cooperative Society')}>Cooperative Society</li>
                                    <li active={filter === 'Farmar Support' ? 'Farmar Support' : 'all'} onClick={() => setFilter('Farmar Support')}>Farmar Support</li>
                                    <li active={filter === 'Other Humanitarian work' ? 'Other Humanitarian work' : 'all'} onClick={() => setFilter('Other Humanitarian work')}>Other Humanitarian work</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-list">
                                {
                                    projects.map(item => item.filtered === true ? (
                                        <div key={item.id} className={`portfolio__container single-portfolio-item ${item.size} ${item.image}`} >
                                            <div className="details">
                                                <div className="info">
                                                    <h5><a href="/#">{item.name}</a></h5>
                                                    <a href={item.image}><i className="las la-search-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    ) : '')
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkGallery
