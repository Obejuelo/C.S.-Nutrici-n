import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import moment from 'moment';
import clsx from 'clsx';

function Countdown(props) {
    const { onComplete } = props;
    const [endDate] = useState(moment.isMoment(props.endDate) ? props.endDate : moment(props.endDate));
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const intervalRef = useRef();

    const complete = useCallback(() => {
        window.clearInterval(intervalRef.current);
        if (onComplete) {
            onComplete();
        }
    }, [onComplete]);

    const tick = useCallback(() => {
        const currDate = moment();
        const diff = endDate.diff(currDate, 'seconds');
        if (diff < 0) {
            complete();
            return;
        }
        const timeLeft = moment.duration(diff, 'seconds');
        setCountdown({
            days: timeLeft.asDays().toFixed(0),
            hours: timeLeft.hours(),
            minutes: timeLeft.minutes(),
            seconds: timeLeft.seconds()
        });
    }, [complete, endDate]);

    useEffect(() => {
        intervalRef.current = setInterval(tick, 1000);
        return () => {
            clearInterval(intervalRef.current);
        };
    }, [tick]);

    return (
        <div className={clsx("flex items-center", props.className)}>
            <div className="flex flex-col items-center justify-center px-12">
                <Typography variant="h4" className="mb-4">
                    {countdown.days}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                    days
                </Typography>
            </div>
            <div className="flex flex-col items-center justify-center px-12">
                <Typography variant="h4" className="mb-4">
                    {countdown.hours}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                    hours
                </Typography>
            </div>
            <div className="flex flex-col items-center justify-center px-12">
                <Typography variant="h4" className="mb-4">
                    {countdown.minutes}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                    minutes
                </Typography>
            </div>
            <div className="flex flex-col items-center justify-center px-12">
                <Typography variant="h4" className="mb-4">
                    {countdown.seconds}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                    seconds
                </Typography>
            </div>
        </div>
    );
}

Countdown.propTypes = {
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    onComplete: PropTypes.func
};

Countdown.defaultProps = {
    endDate: moment().add(15, 'days')
};

export default React.memo(Countdown);
