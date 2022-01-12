import { Card, CardActions, CardContent, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { Icon } from '@chakra-ui/core';
import { Link } from '@jade/ui/atoms';
import { FC } from 'react';

interface Links {
    url: string;
    label: string;
}

interface ContactUsCardData {
    icon?: string;
    heading?: string;
    description?: string;
    links?: Array<Links>;
}

interface ContactUsCardProps {
    data: ContactUsCardData;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: theme.typography.pxToRem(20),
            paddingTop: 0
        },
        alignCenter: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        icon: {
            margin: theme.typography.pxToRem(24)
        },
        heading: {
            fontWeight: theme.typography.fontWeightBold
        },
        description: {
            textAlign: 'center'
        },
        link: {
            marginBottom: theme.typography.pxToRem(10)
        }
    }));

export const ContactUsCard: FC<ContactUsCardProps> = ({ data }: ContactUsCardProps) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className={classes.alignCenter} >
                {data.icon ? <Icon className={classes.icon} name={data.icon} size="40px" /> : ''}
                {data.heading ? <Typography className={classes.heading} gutterBottom color="textSecondary" variant="h6" component="h2">
                    {data.heading}</Typography> : ''}
                {data.description ? <Typography className={classes.description} variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: data.description.toString() }}>
                </Typography> : ''}
            </CardContent>
            {data.links && data.links.length ? <CardActions className={classes.alignCenter}>
                {data.links.map((link: any, index: number) => (
                    <Link href={link.url}>
                        {link.label}
                    </Link>
                ))}
            </CardActions> : ''}
        </Card >
    );
};