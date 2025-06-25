import cls from "./ThemeSwitch.module.css"

export const ThemeSwitch = () => {
  return (
<div className={cls.checkbox_apple}>
  <input className={cls.yep} id="check-apple" type="checkbox"/>
  <label htmlFor="check-apple"></label>
</div>
  );
};

export default ThemeSwitch;