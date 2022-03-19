export type ProfileProps = {
	name: string;
};
const Profile = ({ name }: ProfileProps) => {
	return <div>Private profile component. Name is {name}</div>;
};

export default Profile;
