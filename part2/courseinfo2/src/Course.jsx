import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {
    const header = course.name
    const content = course.parts
    return (
        <>
        <Header header={header}/>
        <Content content={content}/>
        </>
    )
}

export default Course