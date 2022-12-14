

export const Button = (props) => (<button className={"btn fw-bold outline-none " + props?.className} {...props}> {props.children}</button>);

export const PrimaryButton = (props) => (<Button className="btn fw-bold btn-primary text-uppercase text-nowrap" {...props} />);
export const SecondaryButton = (props) => (<Button className="btn fw-bold btn-secondary text-uppercase text-nowrap text-white" {...props} />);