// DELETE a card
router.delete('/:id', async (req, res) => {
    try {
      const libraryCardData = await LibraryCard.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!libraryCardData) {
        res.status(404).json({ message: 'No library card found with that id!' });
        return;
      }
  
      res.status(200).json(libraryCardData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  