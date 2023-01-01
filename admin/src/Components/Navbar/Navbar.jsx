import { useContext } from "react";
import {
	MdOutlineSearch,
	MdOutlineLanguage,
	MdOutlineDarkMode,
	MdOutlineFullscreenExit,
	MdOutlineNotificationsNone,
	MdList,
	MdOutlineChatBubbleOutline,
} from "react-icons/md";
import { ThemeContext } from "../../Context/ThemeContext";
const Navbar = () => {
	const { dispatch } = useContext(ThemeContext);
	const toggleHandler = () => {
		const prevTheme = localStorage.getItem("theme");
		if (prevTheme === "light") {
			dispatch({ type: "TOGGLE" });
			localStorage.setItem("theme", "dark");
		} else if (prevTheme === "dark") {
			dispatch({ type: "TOGGLE" });
			return localStorage.setItem("theme", "light");
		}
	};
	return (
		<div className="navbar h-[50px] dark:text-[#999] border-b-[0.5px] border-[#e6e3e3] dark:border-[#333] flex items-center text-[14px] text-[#555]">
			<div className="wrapper w-full flex items-center justify-between p-[20px]">
				<div className="search flex items-center border-[0.5px] border-[lightgray] dark:border-[gray] rounded-md px-2 py-1">
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Search..."
						className="border-none outline-none bg-[transparent] placeholder:text[12px]"
					/>
					<MdOutlineSearch />
				</div>

				<div className="items flex gap-8 items-center">
					<div className="item flex items-center gap-2">
						<MdOutlineLanguage className="icon" /> English
					</div>

					<div className="item">
						<MdOutlineDarkMode
							className="icon"
							onClick={toggleHandler}
						/>
					</div>

					<div className="item">
						<MdOutlineFullscreenExit className="icon" />
					</div>

					<div className="item relative">
						<MdOutlineNotificationsNone className="icon" />
						<div className="counter">1</div>
					</div>
					<div className="item relative">
						<MdOutlineChatBubbleOutline className="icon" />
						<div className="counter">2</div>
					</div>

					<div className="item">
						<MdList className="icon" />
					</div>
					<div className="item">
						<img
							src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/98731899_2722042244697093_7735845053444128768_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBnZAy4zo3U_voVNl-uKtsG1FLxQ57wEcbUUvFDnvAR0Ikug07kyeOdmWQUs2-2TENZBsYVWUFv6goNNdFK1Oz&_nc_ohc=mEsYvz5orgAAX-Ps3pS&_nc_ht=scontent.fzyl2-1.fna&oh=00_AfDgdyj4--MRVfPaZ1pvqgVAX6I7oL41ynMUUYkteIxWnQ&oe=63D22E3D"
							alt="avatar"
							className="avatar h-[30px] w-[30px] rounded-full "
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
