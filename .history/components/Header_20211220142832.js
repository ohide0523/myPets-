  <header className={classes.root}>
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                MyPets!
              </IconButton>
              <Typography
                className={classes.title}
                variant="h5"
                noWrap
              ></Typography>
              <div className={classes.icons}>
                <Button onClick={search_open}>
                  <SearchIcon className={classes.searchIcon} />
                </Button>
              
                  <Switch
                    className={classes.switchIcon}
                    // checked={isLogin}
                    // onChange={anonymouslyLogin}
                  />
              </div>
            </Toolbar>
          </AppBar>
        </header>
const Header = () => {

    return (
        <div>
             <header className={classes.root}>
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                MyPets!
              </IconButton>
              <Typography
                className={classes.title}
                variant="h5"
                noWrap
              ></Typography>
              <div className={classes.icons}>
                <Button onClick={search_open}>
                  <SearchIcon className={classes.searchIcon} />
                </Button>
              
                  <Switch
                    className={classes.switchIcon}
                    // checked={isLogin}
                    // onChange={anonymouslyLogin}
                  />
              </div>
            </Toolbar>
          </AppBar>
        </header>
        </div>
    )
}

export default Header
