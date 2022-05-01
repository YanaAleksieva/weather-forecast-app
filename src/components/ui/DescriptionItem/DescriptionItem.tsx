import classes from "./DescriptionItem.module.css";

type DescriptionItemProps = {
  children: React.ReactNode;
};

const DescriptionItem = (props: DescriptionItemProps) => {
  return <div className={classes.description}>{props.children}</div>;
};

export default DescriptionItem;
