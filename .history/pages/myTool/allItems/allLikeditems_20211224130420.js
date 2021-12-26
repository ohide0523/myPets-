import React from 'react'

// // material-ui
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const allLikedItems = () => {
    return (
        <>
        <main
          style={{
            width: "100%",
            padding:20,
            paddingTop:60,
            paddingBottom: "100%",
          background:"#FFEEFF"
          }}
        >
          <Grid container spacing={3} className={classes.root}>
            {items.length > 0 && 
              items.map((item, index) => (
                <Grid item xs={6} key={index}>
                  <Card elevation={6} className={classes.card}>
                    <CardContent>
                      <Link
                        href="/[another]/anotherItem/[editItem]"
                        as={`/${item.userId}/anotherItem/${item.id}`}
                      >
                        <Avatar
                          alt="アバター画像"
                          src={item.img}
                          className={classes.avatar}
                        />
                      </Link>
                      <h2 className={classes.title}> {item.title}</h2>
                      <div className={classes.likeCount}>
                        {/* likeCountのcss   */}
                        <div className={classes.likeIcon}>
                          <FavoriteIcon
                            style={{ paddingRight: 3 }}
                          ></FavoriteIcon>
                          {item.likeCount}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </main>
      </>

      
    )
}

export default allLikedItems
