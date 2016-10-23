import React from 'react';
import styles from './home.css';
import homeCss from '!!raw!./home.css';

export default class Home extends React.Component {
    render() {
        return (
            <section className="page">
                <div className={styles.hd}>
                    <h1 className={styles.title}>
                        webpack react: {this.props.location.pathname}
                    </h1>
                    <div className={styles.sub_title}>
                        <p>this.props.route.path: { this.props.route.path }</p>
                        <p>this.props.location.pathname: { this.props.location.pathname }</p>
                    </div>
                    <p className={styles.sub_title}>
                        react demo with webpack, babel and css-modules
                    </p>
                </div>
                <pre className={styles.code}>
                    { homeCss }
                </pre>
            </section>
        );
    }
};
