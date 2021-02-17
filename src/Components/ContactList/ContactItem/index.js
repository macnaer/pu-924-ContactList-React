
const ContactItem = () => {
    return(
        <a href="#" className="list-group-item">
            <div className="media">
                <div className="pull-left">
                    <img className="img-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." />
                </div>
                <div className="media-body">
                    <h4 className="media-heading">John Doe <small>Software Engineer at Facebook, Inc.</small></h4>
                    <div className="media-content">
                        <i className="fa fa-map-marker"></i> San Francisco, California, United States
                        <ul className="list-unstyled">
                            <li><i className="fa fa-skype"></i> jdoe.doe</li>
                            <li><i className="fa fa-mobile"></i> +63 912 212 2451</li>
                            <li><i className="fa fa-envelope-o"></i> joedoe@email.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </a>
    )
}
export default ContactItem;