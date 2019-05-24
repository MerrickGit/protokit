import React from 'react';
import css from './style.css';
// import { Icon } from '../Icon';
import { Spinner } from '../Spinner';

type IProps = {
  label: string;
  type: 'primary' | 'text';
  size: 'large' | 'medium';
  name: string | undefined;
  disabled: boolean;
  color: 'default' | 'negative' | 'positive' | 'neutral';
  visible: boolean;
  loading: boolean;
  rounded: boolean;
  fluid: boolean;
  autofocus: boolean;
  iconName: string | null | undefined;
  iconPosition: 'left' | 'right';
  onClick: ((e: React.MouseEvent<HTMLElement>) => void) | null;
};

/**
 * Default button
 */
const Button: React.FC<IProps> = ({
  label,
  type,
  size,
  name,
  disabled,
  color,
  visible,
  loading,
  rounded,
  fluid,
  onClick,
  autofocus,
  iconName,
  iconPosition
}) =>
  visible ? (
    <button
      name={name}
      type="button"
      className={`${css.button_wrapper} ${fluid ? css.fluid : ''}`}
      disabled={disabled || loading}
      onClick={onClick && !loading ? onClick : undefined}
      autoFocus={autofocus}
      data-group="button"
    >
      <span
        className={`
      ${css.basic_button}
      ${css[`${type}_${color}`]}
      ${css[size]}
      ${loading ? css.loading : ''}
      ${rounded ? css.rounded : ''}
      ${iconName && label && iconPosition === 'left' ? css.left_icon : ''}
      ${iconName && label && iconPosition === 'right' ? css.right_icon : ''}
      ${iconName && !label ? css.center_icon : ''}
    `}
        tabIndex={-1}
      >
        {iconName && iconPosition === 'left' ? (
          <span className={css.hide_when_loading}>{/* <Icon name={iconName} size="2x" /> */}</span>
        ) : null}

        <span className={css.hide_when_loading}>{label}</span>

        {/*{iconName && iconPosition === 'right' ? (*/}
        {/*  <span className={css.hide_when_loading}>*/}
        {/*     <Icon name={iconName} size="2x" />{' '} */}
        {/*  </span>*/}
        {/*) : null}*/}

        <div className={css.spinner_wrapper}>
          <Spinner
            height="10px"
            width="80px"
            type="inline"
            // color={type === types[0] ? 'hsla(0, 0%, 100%, 0.6)' : 'hsla(0, 0%, 30%, 0.6'}
          />
        </div>
      </span>
    </button>
  ) : null;

Button.defaultProps = {
  name: undefined,
  type: 'primary',
  color: 'default',
  size: 'medium',
  rounded: false,
  fluid: false,
  disabled: false,
  visible: true,
  label: 'label',
  onClick: null,
  iconName: null,
  iconPosition: 'right',
  autofocus: false
};

export { Button };
