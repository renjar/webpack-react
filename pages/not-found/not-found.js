import React from 'react';
import styles from './not-found.css';

export default class NotFound extends React.Component {
    render() {
        return (
            <section className="page">
                <div className={styles.title}>
                    404 Not Found: {this.props.location.pathname}
                </div>
                <div className={styles.sub_title}>
                    <p>this.props.route.path: { this.props.route.path }</p>
                    <p>this.props.location.pathname: { this.props.location.pathname }</p>
                </div>
            </section>
        );
    }
};
