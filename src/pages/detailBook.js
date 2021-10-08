import BookFour from '../assets/books/book4.png'
import SidebarSubscribe from '../component/sidebarSubscribe'
import List from '../assets/img/list.png'
import V from '../assets/img/V.png'

import { Link } from 'react-router-dom'

import './style.css'
import { Container, Button } from 'react-bootstrap'

// import bookList from './bookList'

function DetailBook() {
    return (
        <Container fluid className="homepage">
            <SidebarSubscribe />
            <div className="main-content">
                <div className="main-book">
                    <img src={BookFour} alt="cover-book" />
                    <div className="book-detail">
                        <h1 className="text-header">Tess on The Road</h1>
                        <p className="text-secondary">Rachel Hartman</p>
                        <h4 className="text-header">Public Date</h4>
                        <p className="text-secondary">April 2020</p>
                        <h4 className="text-header">Pages</h4>
                        <p className="text-secondary">436</p>
                        <h4 className="text-danger">ISBN</h4>
                        <p className="text-secondary">9781789807554</p>
                    </div>

                </div>
                <div className="book-about">
                    <h1 className="text-about">About This Book</h1>
                    <p className="text-secondary">
                        In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons get to be whomever they want. Tess, stubbornly, is a troublemaker. You can’t make a scene at your sister’s wedding and break a relative’s nose with one punch (no matter how pompous he is) and not suffer the consequences. As her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a journey across the Southlands, alone and pretending to be a boy.
                    </p>
                    <p className="text-secondary">
                        Where Tess is headed is a mystery, even to her. So when she runs into an old friend, it’s a stroke of luck. This friend is a quigutl—a subspecies of dragon—who gives her both a purpose and protection on the road. But Tess is guarding a troubling secret. Her tumultuous past is a heavy burden to carry, and the memories she’s tried to forget threaten to expose her to the world in more ways than one.
                    </p>
                    <p className="text-secondary">
                        Returning to the fascinating world she created in the award-winning and New York Times bestselling Seraphina, Rachel Hartman introduces readers to a new character and a new quest, pushing the boundaries of genre once again in this wholly original fantasy.
                    </p>
                    <Link to="/read-book">
                        <Button variant="secondary">Read Book <img src={V} alt="" /></Button>
                    </Link>
                    <Button variant="danger">Add My List <img src={List} alt="" /></Button>
                </div>
            </div>
        </Container>
    )
}

export default DetailBook;