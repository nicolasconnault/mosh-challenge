import { FunctionComponent } from 'react'
import styles from '@/styles/Card.module.css'

const Card: FunctionComponent = ({
                                       children,
                                   }: {
    children: ReactChildren
}) => {
    return (
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {children}
        </div>
    )
}

export default Card