import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Course = ({ course }) => {
    const header = course.name
    const content = course.parts
    const total = content.reduce((sum, part) => sum+part.exercises, 0)
    return (
        <>
        <Header header={header}/>
        <Content content={content}/>
        <Footer total={total}/>
        </>
    )
}

export default Course