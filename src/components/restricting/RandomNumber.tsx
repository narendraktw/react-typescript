type RandomNumberType = {
	value: number;
};

type PositiveNumber = RandomNumberType & {
	isPositive: boolean;
	isNegative?: never;
	isZero?: never;
};

type NegativeNumber = RandomNumberType & {
	isNegative: boolean;
	isPositive?: never;
	isZero?: never;
};

type Zero = RandomNumberType & {
	isZero: boolean;
	isPositive?: never;
	isNegative?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;
const RandomNumber = ({
	value,
	isPositive,
	isNegative,
	isZero,
}: RandomNumberProps) => {
	return (
		<>
			{value}
			{"  "}
			{isPositive && "positive"}
			{"  "}
			{isNegative && "negative"}
			{"  "}
			{isZero && "zero"}
		</>
	);
};

export default RandomNumber;
